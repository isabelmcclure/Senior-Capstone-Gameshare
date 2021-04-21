const stripe = require('stripe')('sk_test_51IdoMPBL7EVXf27yRov1hIaRrRPbaUi0lS7YjYduTZLWUpw9u3rTFut2GB7Yu2QPHcRHu0t6RtYdKS691QcFpLVt00Fs1ArB3T');

export default async (req, res) => {
    const session = await stripe.checkout.sessions.retrieve(req.query.session_id);
    const customer = await stripe.customers.retrieve(session.customer);

    res.send(`<html><body><h1>Thanks for your order, ${customer.name}!</h1></body></html>`);
}
