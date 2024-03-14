import { AppProps } from "next/app"
import { globalStyles } from "../styles/global"

import logoImage from '../assets/logo.svg'
import Image from "next/image"
import { Container, Header } from "../styles/pages/app"

import { CartModal } from "../components/cart_modal"
import { Toaster } from 'sonner'
import { CartProvider } from "../contexts/Cart"
import { NextComponentType, NextPageContext } from "next"

globalStyles()

interface MyAppProps extends AppProps {
  Component: NextComponentType<NextPageContext, any, any> & {
    hideLayout?: boolean
  }
}

export default function App({ Component, pageProps }: MyAppProps) {
  const hideLayout = Component.hideLayout || false

  return (
    <CartProvider>
      <Toaster richColors closeButton />

      <Container>
        {!hideLayout && (
          <Header>
            <Image src={logoImage} alt="" />

            <CartModal />
          </Header>
        )}

        <Component {...pageProps} />
      </Container>
    </CartProvider>
  )
}
