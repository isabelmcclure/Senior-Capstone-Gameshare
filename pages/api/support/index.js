import dbConnect from '../../../util/dbConnect'
import Support from '../../../models/support'

//dbConnect();

export default async (req, res) => {

    const { method } = req;

    switch (method) {
        case 'GET':
            try {
                const supports = await Support.find();
                res.status(200).json({ success: true, data: supports });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        case 'POST':
            try {
                const support = await Support.create(req.body);
                res.status(201).json({ success: true, data: support });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        default:
            res.status(400).json({ success: false });
            break;
    }
}

