import dbConnect from '../../util/dbConnect'
import Image from '../../models/image'

console.log("reached images.js")

const multer = require("multer");
const cloudinary = require('cloudinary-core').Cloudinary.new()
const { CloudinaryStorage } = require("multer-storage-cloudinary");
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    folder: "samples",
    allowedFormats: ["jpg", "png"],
    transformation: [{ width: 500, height: 500, crop: "limit" }]
});
const parser = multer({ storage: storage });
parser.single("image")

dbConnect();

export default async (req, res) => {

    console.log(req.body)

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
                console.log("posting...")
                console.log(req.file)
                const image = {};
                    image.url = req.file.url;
                    image.id = req.file.public_id;
                const _image = await Image.create(image) // save image information in database
                                    .then(newImage => res.json(newImage))
                                    .catch(err => console.log(err));
                res.status(201).json({ success: true, data: _image });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        default:
            res.status(400).json({ success: false });
            break;
    }
}

