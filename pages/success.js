import { useRouter } from 'next/router'
import useSWR from 'swr'
import dbConnect from '../util/dbConnect'
import Boardgame from '../models/boardgame'


export default function Success() {
    const router = useRouter();

    const { data, error } = useSWR(
        router.query.session_id ?
            `/api/checkout/${router.query.session_id}`
            : null,
        (url) => fetch(url).then(res => res.json())
    )
    const { session_id } = router.query
    //console.log(data.session.payment_intent.charges.data.name)

    //console.log(JSON.stringify(data[1], null, 2))

    return (
        <div >
            <head><title>Thanks for your order!</title></head>
            <body>
                <div className="mx-auto p-5">
                    <h1 className="text-3xl font-bold">Thanks for your order!</h1>
                    <p>{session_id}</p>
                    <p>
                        We appreciate your business!
                        If you have any questions, please email
      <a href="mailto:orders@example.com">orders@example.com</a>.
    </p>
                </div>

            </body>
            <pre>{data ? JSON.stringify(data, null, 2) : 'Loading...'}</pre>
        </div>
    )
}