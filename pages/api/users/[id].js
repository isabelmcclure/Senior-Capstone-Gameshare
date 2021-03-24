import User from '../../../models/user'


export default async (req, res) => {
    const {
        query: { id },
        method
    } = req;

    switch (method) {
        case 'GET':
            try {
                const user = await User.findById(id);

                if (!user) {
                    return res.status(400).json({ success: false });
                }
                return res.status(200).json({ success: true, data: user });

            } catch (error) {
                return res.status(400).json({ success: false });
            }
            break;
        case 'PUT':
            try {
                const user = await User.findByIdAndUpdate(id, req.body, {
                    new: true,
                    runValidators: true
                });
                if (!user) {
                    return res.status(400).json({ success: false });
                }
                return res.status(200).json({ success: true, data: user });


            } catch (error) {
                return res.status(400).json({ success: false });
            }
            break;
        case 'DELETE':
            try {
                const deletedUser = await User.deleteOne({ _id: id });

                if (!deletedUser) {
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