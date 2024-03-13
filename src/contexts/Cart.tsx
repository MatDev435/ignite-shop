import { useState, createContext, ReactNode } from 'react'
import { toast } from 'sonner'

export interface Item {
    id: string
    name: string
    imageUrl: string
    price: number
    currency: string
    amount?: number
    description: string
    defaultPriceId: string
}

interface CartType {
    items: Item[]
    addItem: (newItem: Item) => void
    removeItem: (itemId: string) => void
    itemsAmount: number
    totalPrice: number
}

export const CartContext = createContext({} as CartType)

interface CartProviderProps {
    children: ReactNode
}

export function CartProvider({ children }: CartProviderProps) {
    const [items, setItems] = useState<Item[]>([], )

    function addItem(newItem: Item) {
        const itemExists = items.some(item => item.id === newItem.id)

        if (itemExists) {
            setItems(prevItems => 
                prevItems.map(item => 
                    item.id === newItem.id ? { ...item, amount: item.amount + 1 } : item
                )
            )
        } else {
            setItems(prevItems => [...prevItems, { ...newItem, amount: 1 }])
        }

        toast.success('Item adicionado.')
    }

    function removeItem(itemId: string) {
        setItems(prevItems =>
            prevItems.map(item =>
                item.id === itemId ?
                    { ...item, amount: item.amount > 1 ? item.amount - 1 : 0 }
                :
                    item
            ).filter(item => item.amount !== 0)
        )
    }

    const itemsAmount = items.reduce((sum, item) => sum + item.amount, 0)
    const totalPrice = items.reduce((sum, item) => sum + (item.price * item.amount), 0)

    return (
        <CartContext.Provider value={{items,
            addItem,
            removeItem,
            itemsAmount,
            totalPrice
        }}>
            {children}
        </CartContext.Provider>
    )
}