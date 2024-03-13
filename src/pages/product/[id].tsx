import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product"
import Image from "next/image"
import { GetStaticPaths, GetStaticProps } from "next"
import { stripe } from "../../lib/stripe"
import Stripe from "stripe"
import Head from "next/head"
import { formatPrice } from "../../utils/format_price"
import { useContext } from "react"
import { CartContext } from "../../contexts/Cart"

interface ProductProps {
    product: {
        id: string
        name: string
        imageUrl: string
        price: number
        currency: string
        description: string
        defaultPriceId: string
    }
}

export default function Product({ product }: ProductProps) {
    const { addItem } = useContext(CartContext)

    function handleAddToCart() {
            addItem(product)
    }

    return (
        <>
            <Head>
                <title>{product.name} | Ignite Shop</title>
            </Head>

            <ProductContainer>
                <ImageContainer>
                    <Image src={product.imageUrl} alt="" width={520} height={480} />
                </ImageContainer>

                <ProductDetails>
                    <h1>{product.name}</h1>
                    <span>
                        {formatPrice(product.price)}
                    </span>

                    <p>{product.description}</p>

                    <button
                        onClick={handleAddToCart}
                    >
                        Colocar na sacola
                    </button>
                </ProductDetails>
            </ProductContainer>
        </>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [
            { params: { id: 'prod_PiF0Jn1jrTnBMP' } }
        ],
        fallback: 'blocking'
    }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({ params }) => {
    const productId = params.id

    const product = await stripe.products.retrieve(productId, {
        expand: ['default_price']
    })

    const price = product.default_price as Stripe.Price

    return {
        props: {
            product: {
                id: product.id,
                name: product.name,
                imageUrl: product.images[0],
                price: price.unit_amount,
                currency: price.currency,
                description: product.description,
                defaultPriceId: price.id,
            }
        },
        revalidate: 60 * 60 * 1, // 1 horas
    }
}