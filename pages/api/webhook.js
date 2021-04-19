import dbConnect from '../../util/dbConnect'
import Boardgame from '../../models/boardgame'
import getRawBody from 'raw-body'
const stripe = require('stripe')('sk_test_51IdoMPBL7EVXf27yRov1hIaRrRPbaUi0lS7YjYduTZLWUpw9u3rTFut2GB7Yu2QPHcRHu0t6RtYdKS691QcFpLVt00Fs1ArB3T');

export const config = {
    api: {
        bodyParser: false,
    },
};


export default async (req, res) => {
    const payload = await getRawBody(req);
    //console.log(req.body)
    const sig = req.headers['stripe-signature'];
    const endpointSecret = "whsec_2IMKCINkwtPFRB7wcV9aoeJPfp9xxlgB";

    const payloadjson = JSON.stringify(payload, null, 2)
    //console.log(payloadjson)
    let event;

    try {
        event = stripe.webhooks.constructEvent(payload, sig, endpointSecret);
    } catch (err) {
        console.log(err.message)
        return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    //console.log(event.data.object)
    // Handle the checkout.session.completed event
    switch (event.type) {
        case 'payment_intent.created':
            const paymentIntentCreated = event.data.object;
            console.log('PaymentIntent was created!');
            break;
        case 'customer.created':
            const customer = event.data.object;
            console.log('Customer created!')
        case 'payment_intent.succeeded':
            const paymentIntent = event.data.object;
            console.log('PaymentIntent was successful!');
            break;
        case 'payment_method.attached':
            const paymentMethod = event.data.object;
            console.log('PaymentMethod was attached to a Customer!');
            break;
        case 'checkout.session.completed':
            // Fulfill the purchase...
            const session = event.data.object;
            dbConnect();
            const productID = session.cancel_url.split('/')
            console.log(productID[4]);
            let userBoardgames;
            userBoardgames = await Boardgame.findOneAndUpdate({ _id: productID[4] }, { available: "false" })
            console.log("Fulfilling order", session);
            break;
        // ... handle other event types
        case 'charge.succeeded':
            const succeeded = event.data.object;
            console.log("Charge Completed!");
            break;
        default:
            console.log(`Unhandled event type ${event.type}`);
    }

    res.status(200).json({ status: true });

}