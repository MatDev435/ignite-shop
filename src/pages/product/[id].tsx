import { useRouter } from "next/router"
import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product"
import Image from "next/image"

export default function Product() {
    const { query } = useRouter()

    return (
        <ProductContainer>
            <ImageContainer>
                {/* <Image src={} alt="" /> */}
            </ImageContainer>

            <ProductDetails>
                <h1>Camiseta X</h1>
                <span>R$ 79,90</span>

                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error, porro sequi consequatur dolorum temporibus doloribus ipsam corporis beatae animi voluptate quis, voluptatum aperiam earum asperiores. Aliquid rem commodi neque similique?</p>

                <button>Comprar agora</button>
            </ProductDetails>
        </ProductContainer>
    )
}