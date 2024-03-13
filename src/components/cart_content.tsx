import { X } from "@phosphor-icons/react";
import { CloseDialog, DialogContent, Item, ItemImageContainer, ItemInfo, ItemsContainer } from "../styles/components/cart_content";
import Image from "next/image";
import { formatPrice } from "../utils/format_price";
import { useContext } from "react";
import { CartContext } from "../contexts/Cart";

export function CartContent() {
    const { items, removeItem, itemsAmount, totalPrice } = useContext(CartContext)

    function handleRemoveItem(itemId: string) {
        removeItem(itemId)
    }

    return (
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
                    // onClick={handleCheckout}
                >
                    Finalizar compra
                </button>
            </footer>
        </DialogContent>
    )
}