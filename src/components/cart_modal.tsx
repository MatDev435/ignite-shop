import { Bag, X } from "@phosphor-icons/react";

import {
    CartButton,
    CloseDialog,
    DialogContent,
    Item,
    ItemImageContainer,
    ItemInfo,
    ItemsContainer
} from "../styles/components/cart_modal";

import Image from "next/image";
import { formatPrice } from "../utils/format_price";
import { useContext, useState } from "react";
import { CartContext } from "../contexts/Cart";
import axios from "axios";
import { toast } from "sonner";
import * as Dialog from '@radix-ui/react-dialog'

export function CartModal() {
    const [isCreatingSession, setIsCreatingSession] = useState(false)
    const { items, removeItem, itemsAmount, totalPrice } = useContext(CartContext)
    
    function handleRemoveItem(itemId: string) {
        removeItem(itemId)
    }

    async function handleCheckout() {
        try {
            setIsCreatingSession(true)

            const response = await axios.post('/api/checkout', {
                items
            })
    
            const { checkoutUrl } = response.data
    
            window.location = checkoutUrl
        } catch (err) {
            setIsCreatingSession(false)

            toast.error('Falha ao redirecionar para o checkout.')
        }
    }

    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>
                <CartButton>
                    {itemsAmount > 0 && (
                        <span>
                            {itemsAmount > 9 ? '9+' : itemsAmount}
                        </span>
                    )}

                    <Bag size={24} />
                </CartButton>
            </Dialog.Trigger>

            <Dialog.Portal>
                <Dialog.DialogOverlay />

                
                <DialogContent>
                    <CloseDialog>
                        <X size={24} />
                    </CloseDialog>

                    <h1>Sacola de compras</h1>

                    <ItemsContainer>
                        {items && items.map(item => {
                        return (
                                <Item key={item.id}>
                                    <ItemImageContainer>
                                        <Image src={item.imageUrl} alt="" width={94} height={94} />
                                    </ItemImageContainer>

                                    <ItemInfo>
                                        <span>{item.name} ({item.amount})</span>

                                        <strong>
                                            {formatPrice(item.price)}
                                        </strong>

                                        <button
                                            onClick={() => handleRemoveItem(item.id)}
                                        >
                                            Remover
                                        </button>
                                    </ItemInfo>
                                </Item>
                            )
                        })}
                    </ItemsContainer>

                    <footer>
                        <span>Quantidade</span>
                        <span>{itemsAmount} itens</span>

                        <strong>Valor total</strong>
                        <strong>
                            {formatPrice(totalPrice)}
                        </strong>

                        <button
                            onClick={handleCheckout}
                            disabled={isCreatingSession}
                        >
                            Finalizar compra
                        </button>
                    </footer>
                </DialogContent>
            </Dialog.Portal>
        </Dialog.Root>
    )
}