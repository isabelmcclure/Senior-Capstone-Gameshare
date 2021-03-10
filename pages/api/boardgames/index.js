import dbConnect from '../../../util/dbConnect'
import Boardgame from '../../../models/boardgame'

dbConnect();

export default async (req, res) => {

    const { method } = req;

    switch (method) {
        case 'GET':
            try {
                const boardgames = await Boardgame.find();
                res.status(200).json({ success: true, data: boardgames });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        case 'POST':
            try {
                const boardgame = await Boardgame.create(req.body);
                res.status(201).json({ success: true, data: boardgame });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        default:
            res.status(400).json({ success: false });
            break;
    }
}

