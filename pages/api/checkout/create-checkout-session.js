import { useRouter } from 'next/router'



export default async (req, res) => {

    const stripe = require('stripe')('sk_test_51IdoMPBL7EVXf27yRov1hIaRrRPbaUi0lS7YjYduTZLWUpw9u3rTFut2GB7Yu2QPHcRHu0t6RtYdKS691QcFpLVt00Fs1ArB3T')


    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
            {
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: req.body.title,
                    },
                    unit_amount: req.body.price,
                },
                quantity: 1,
            },
        ],
        mode: 'payment',
        success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: req.body.path,
    });

    //console.log(session)
    res.json({ id: session.id, productID: req.body.id });



    //curl -X POST -i "http://localhost:3000/api/create-checkout-session" -d ""


}
