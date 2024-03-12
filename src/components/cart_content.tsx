import { X } from "@phosphor-icons/react";
import { CloseDialog, DialogContent, Item, ItemImageContainer, ItemInfo, ItemsContainer } from "../styles/components/cart_content";
import { useShoppingCart } from "use-shopping-cart";
import Image from "next/image";
import { formatPrice } from "../utils/format_price";

export function CartContent() {
    const {
        cartDetails,
        totalPrice,
        cartCount,
        decrementItem
    } = useShoppingCart()

    function handleRemoveItem(itemId: string) {
        decrementItem(itemId, {
            count: 1
        })
    }

    return (
        <DialogContent>
            <CloseDialog>
                <X size={24} />
            </CloseDialog>

            <h1>Sacola de compras</h1>

            <ItemsContainer>
                {Object.keys(cartDetails).map(item => {
                    const itemInCart = cartDetails[item]

                    return (
                        <Item key={itemInCart.id}>
                            <ItemImageContainer>
                                <Image src={itemInCart.image} alt="" width={94} height={94} />
                            </ItemImageContainer>

                            <ItemInfo>
                                <span>{itemInCart.name} ({itemInCart.quantity})</span>

                                <strong>
                                    {formatPrice(itemInCart.price)}
                                </strong>

                                <button
                                    onClick={() => handleRemoveItem(itemInCart.id)}
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
                <span>{cartCount} itens</span>

                <strong>Valor total</strong>
                <strong>
                    {formatPrice(totalPrice)}
                </strong>

                <button>Finalizar compra</button>
            </footer>
        </DialogContent>
    )
}