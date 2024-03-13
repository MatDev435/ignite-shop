import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "../../lib/stripe";
import { Item } from "../../contexts/Cart";

const successUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`
const cancelUrl = `${process.env.NEXT_URL}`

interface CheckoutReqType {
    items: Item[]
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { items }: CheckoutReqType = req.body

    if (req.method !== 'POST') {
        return res.status(405)
    }

    if (!items) {
        return res.status(400).json({ error: 'Price not found' })
    }

    const lineItems = items.flatMap(item => {
        const lineItemsArray = []

        for (let i = 0; i < item.amount; i++) {
            lineItemsArray.push({
                price: item.defaultPriceId,
                quantity: 1
            })
        }

        return lineItemsArray
    })

    const checkoutSession = await stripe.checkout.sessions.create({
        success_url: successUrl,
        cancel_url: cancelUrl,
        mode: 'payment',
        line_items: lineItems
    })

    return res.status(201).json({
        checkoutUrl: checkoutSession.url
    })
}