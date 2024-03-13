import { AppProps } from "next/app"
import { globalStyles } from "../styles/global"
import * as Dialog from '@radix-ui/react-dialog'

import logoImage from '../assets/logo.svg'
import Image from "next/image"
import { CartButton, Container, DialogOverlay, Header } from "../styles/pages/app"
import { Bag, X } from "@phosphor-icons/react"

import { CartContent } from "../components/cart_content"
import { Toaster } from 'sonner'
import { CartProvider } from "../contexts/Cart"

globalStyles()


export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <Toaster richColors closeButton />

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
