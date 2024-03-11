import Image from "next/image";
import { Arrow, ArrowContainer, HomeContainer, Product } from "../styles/pages/home";
import 'keen-slider/keen-slider.min.css'
import { stripe } from "../lib/stripe";
import { GetStaticProps } from "next";
import Stripe from "stripe";
import { useKeenSlider } from 'keen-slider/react'
import Link from "next/link";
import Head from "next/head";
import { useState } from "react";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";

interface HomeProps {
  products: {
    id: string
    name: string
    imageUrl; string
    price: string
  }[]
}

export default function Home({ products }: HomeProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [sliderLoaded, setSliderLoaded] = useState(false)

  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setSliderLoaded(true)
    },
    slides: {
      perView: 2,
      spacing: 48,
    },
  })

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>

      <HomeContainer>
        <div ref={sliderRef} className="keen-slider">
          {products.map(product => {
            return (
              <Link href={`/product/${product.id}`} key={product.id} prefetch={false}>
                <Product className="keen-slider__slide">
                  <Image src={product.imageUrl} alt="" width={520} height={480} />

                  <footer>
                    <strong>{product.name}</strong>
                    <span>{product.price}</span>
                  </footer>
                </Product>
              </Link>
            )
          })}
        </div>

        {sliderLoaded && instanceRef.current && (
          <ArrowContainer>
            <Arrow
              side='left'
              onClick={(e:any) => {
                instanceRef.current?.prev()
              }}
              disabled={currentSlide === 0}
            >
              <CaretLeft size={48} />
            </Arrow>

            <Arrow
              side='right'
              onClick={(e:any) => {
                instanceRef.current?.next()
              }}
              disabled={currentSlide > instanceRef.current.track.details.length}
            >
              <CaretRight size={48} />
            </Arrow>
          </ArrowContainer>
        )}
      </HomeContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })

  const products = response.data.map(product => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      }).format(price.unit_amount / 100),
    }
  })

  return {
    props: {
      products
    },
    revalidate: 60 * 60 * 2, // 2 horas
  }
}