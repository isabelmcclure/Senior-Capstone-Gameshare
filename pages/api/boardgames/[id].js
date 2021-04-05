import dbConnect from '../../../util/dbConnect'
import Boardgame from '../../../models/boardgame'

<<<<<<< HEAD
dbConnect();

=======
>>>>>>> 3aba75dfe243ad7b0afd32d68d27663bdbc2dd28
export default async (req, res) => {
    const {
        query: { id },
        method
    } = req;

    switch (method) {
        case 'GET':
            try {
                const boardgame = await Boardgame.findById(id);

                if (!boardgame) {
                    return res.status(400).json({ success: false });
                }
                return res.status(200).json({ success: true, data: boardgame });

            } catch (error) {
                return res.status(400).json({ success: false });
            }
            break;
        case 'PUT':
            try {
                const boardgame = await Boardgame.findByIdAndUpdate(id, req.body, {
                    new: true,
                    runValidators: true
                });
                if (!boardgame) {
                    return res.status(400).json({ success: false });
                }
                return res.status(200).json({ success: true, data: boardgame });


            } catch (error) {
                return res.status(400).json({ success: false });
            }
            break;
        case 'DELETE':
            try {
                const deletedGame = await Boardgame.deleteOne({ _id: id });

                if (!deletedGame) {
                    return res.status(400).json({ success: false });
                }
                return res.status(200).json({ success: true, data: {} });

            } catch (error) {
                return res.status(400).json({ success: false });
            }
            break;
        default:
            return res.status(400).json({ success: false });
            break;
    }
}