import Stripe from 'stripe'

const stripe = require('stripe')('sk_test_51IdoMPBL7EVXf27yRov1hIaRrRPbaUi0lS7YjYduTZLWUpw9u3rTFut2GB7Yu2QPHcRHu0t6RtYdKS691QcFpLVt00Fs1ArB3T')

export default async (req, res) => {
    //console.log(req.query)
    //console.log(stripe.checkout)
    const { id } = req.query;
    const session = await stripe.checkout.sessions.retrieve(id, { expand: ['payment_intent'] })
    //console.log(session)
    res.status(200).json({ session })
}