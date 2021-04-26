import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { loadStripe } from '@stripe/stripe-js';
import { useRouter } from 'next/router'
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51IdoMPBL7EVXf27y0v5tmJygTkTgd6iwveMdLQK4DH3oZ8fZZWp6yzxV03dX6ztZ8zNUt1RTDlRc1lX5kaW12jj6004Wl23sTl');

const GameBar = (props) => {

    const handleClick = async (event) => {
        event.preventDefault();
        // Get Stripe.js instance
        const stripe = await stripePromise;


        // Call your backend to create the Checkout Session
        const response = await fetch('../api/checkout/create-checkout-session', {
            method: 'POST', headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({ title: props.product, price: props.rate + '00', path: window.location.href, productID: props.id })
        });

        const session = await response.json();
        //console.log(session)

        // When the customer clicks on the button, redirect them to Checkout.
        const result = await stripe.redirectToCheckout({
            sessionId: session.id,
        });

        if (result.error) {
            // If `redirectToCheckout` fails due to a browser or network
            // error, display the localized error message to your customer
            // using `result.error.message`.
        }
    };

    return (
        <div className={styles.landing}>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Monserrat" />
            <div className="max-w-6xl h-auto mx-auto bg-blue-200 mt-8 rounded-xl shadow-lg">
                <div className="flex p-4 h-auto">
                    {/* UserBar elements */}
                    <div className="border-blue-300 rounded flex justify-evenly content-center m-2 w-2/4">

                        <div className="flex-col justify-evenly w-2/4 h-auto mt-5">
                            <h1 className="font-extrabold text-blue-700 text-3xl mt-1">{props.boardgame.title}</h1>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 divide-y divide-purple-300 w-2/4 h-auto">
                        <div>
                            <h1 className="inline-block font-extrabold text-blue-700 text-1xl">Quality:</h1>
                            <p className="inline-block pl-2 ">{props.boardgame.quality}/5</p>
                        </div>
                        <div>
                            <h1 className="inline-block font-extrabold text-blue-700 text-1xl">Price:</h1>
                            <p className="inline-block pl-2 ">${props.boardgame.price}</p>
                        </div>
                        <div>
                            <h1 className="inline-block font-extrabold text-blue-700 text-1xl">Location:</h1>
                            <p className="inline-block pl-2">{props.boardgame.location}</p>
                        </div>
                        <div>
                            <h1 className="inline-block font-extrabold text-blue-700 text-1xl">Description:</h1>
                            <p className="inline-block pl-2">{props.boardgame.description}</p>
                        </div>
                        <div className="pt-5">
                            {/*<button className="bg-blue-500 p-2 mr-2 rounded text-white">Friends</button>*/}
                            <button className="bg-blue-500 p-2 mr-2 rounded text-white" role="link" onClick={handleClick}>Rent</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default GameBar;