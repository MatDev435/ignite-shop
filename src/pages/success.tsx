import Link from "next/link";
import { ImageContainer, ImagesContainer, LogoContainer, SuccessContainer } from "../styles/pages/success";
import { GetServerSideProps } from "next";
import { stripe } from "../lib/stripe";
import Stripe from "stripe";
import Image from "next/image";
import Head from "next/head";
import Logo from '../assets/logo.svg'

interface Product {
    name: string
    imageUrl: string
}

interface SuccessProps {
    customerName: string
    products: Product[]
}

function Success({ customerName, products }: SuccessProps) {
    return (
        <>
            <Head>
                <title>Compra efetuada | Ignite Shop</title>

                <meta name="robots" content="noindex" />
            </Head>

            <SuccessContainer>
                <LogoContainer>
                    <Image src={Logo} alt="" width={129} height={52} />
                </LogoContainer>

                <ImagesContainer>
                    {products.map((product, i) => {
                        return (
                            <ImageContainer key={i}>
                                <Image src={product.imageUrl} alt="" width={130} height={132} />
                            </ImageContainer>
                        )
                    })}
                </ImagesContainer>

                <h1>Compra efetuada!</h1>

                <p>
                    Uhuul <strong>{customerName}</strong>, sua compra de {products.length} camiseta(s){' '}
                    já está a caminho da sua casa. 
                </p>

                <Link href='/'>Voltar ao catálogo</Link>
            </SuccessContainer>
        </>
    )
}

Success.hideLayout = true

export default Success

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    if (!query.session_id) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }

    const sessionId = String(query.session_id)

    const session = await stripe.checkout.sessions.retrieve(sessionId, {
        expand: ['line_items', 'line_items.data.price.product']
    })

    const customerName = session.customer_details.name
    const products = session.line_items.data.map(data => {
        const product = data.price.product as Stripe.Product

        return {
            name: product.name,
            imageUrl: product.images[0]
        }
    })

    return {
        props: {
            customerName,
            products
        }
    }
}
