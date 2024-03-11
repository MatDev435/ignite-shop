import { AppProps } from "next/app"
import { globalStyles } from "../styles/global"
import * as Dialog from '@radix-ui/react-dialog'

import logoImage from '../assets/logo.svg'
import Image from "next/image"
import { CartButton, CloseDialog, Container, DialogContent, DialogOverlay, Header, Item, ItemImageContainer, ItemInfo, ItemsContainer } from "../styles/pages/app"
import { Bag, X } from "@phosphor-icons/react"

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
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

            <DialogContent>
              <CloseDialog>
                <X size={24} />
              </CloseDialog>

              <h1>Sacola de compras</h1>

              <ItemsContainer>
                <Item>
                  <ItemImageContainer>
                    {/* <Image src={} alt="" width={} height={} /> */}
                  </ItemImageContainer>

                  <ItemInfo>
                    <span>Camiseta Explorer</span>

                    <strong>R$ 62,90</strong>

                    <button>Remover</button>
                  </ItemInfo>
                </Item>
              </ItemsContainer>

              <footer>
                <span>Quantidade</span>
                <span>3 itens</span>

                <strong>Valor total</strong>
                <strong>R$ 270,00</strong>

                <button>Finalizar compra</button>
              </footer>
            </DialogContent>
          </Dialog.Portal>
        </Dialog.Root>
      </Header>

      <Component {...pageProps} />
    </Container>
  )
}
