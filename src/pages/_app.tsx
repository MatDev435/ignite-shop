import { AppProps } from "next/app"
import { globalStyles } from "../styles/global"
import * as Dialog from '@radix-ui/react-dialog'

import logoImage from '../assets/logo.svg'
import Image from "next/image"
import { CartButton, CloseDialog, Container, DialogContent, DialogOverlay, Header, Item, ItemImageContainer, ItemInfo, ItemsContainer } from "../styles/pages/app"
import { Bag, X } from "@phosphor-icons/react"

import { CartProvider } from 'use-shopping-cart'
import { CartContent } from "../components/cart_content"

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider
      mode="payment"
      cartMode="client-only"
      stripe={process.env.STRIPE_PUBLIC_KEY}
      successUrl={`${process.env.NEXT_URL}/success`}
      cancelUrl={`${process.env.NEXT_URL}/`}
      currency="BRL"
      allowedCountries={['BR']}
      billingAddressCollection={true}
      shouldPersist={true}
    >
      <Container>
        <Header>
          <Image src={logoImage} alt="" />

          <Dialog.Root>
            <Dialog.Trigger asChild>
              <CartButton>
                <Bag size={24} />
              </CartButton>
            </Dialog.Trigger>

            <Dialog.Portal>
              <DialogOverlay />

              <CartContent />
            </Dialog.Portal>
          </Dialog.Root>
        </Header>

        <Component {...pageProps} />
      </Container>
    </CartProvider>
  )
}
