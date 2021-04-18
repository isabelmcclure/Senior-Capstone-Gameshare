import Iron from '@hapi/iron'
import CookieService from '../../util/cookie'
import axios from 'axios'
import dbConnect from '../../util/dbConnect'
import User from '../../models/user'
import Boardgame from '../../models/boardgame'

dbConnect();

export default async (req, res) => {
    //console.log("userMagic")
    let userMagic;
    try {
        userMagic = await Iron.unseal(CookieService.getAuthToken(req.cookies), process.env.ENCRYPTION_SECRET, Iron.defaults)
    } catch (error) {
        console.log("SSS")
        console.log(error)
    }

    // now we have access to the data inside of user
    // and we could make database calls or just send back what we have
    // in the token.
    //console.log("newUser")
    let newUser;
    try {
        newUser = await User.findOneAndUpdate({ email: userMagic.email }, { email: userMagic.email, username: userMagic.email }, { new: true, upsert: true })
        /*await axios.post('http://localhost:3000/api/users', {
            email: userMagic.email,
            rating: 5,
        })*/
    } catch (error) {
        console.log(error);
        try {
            console.log(userMagic.email)
            newUser = await User.create({ email: userMagic.email, username: userMagic.email })
        } catch (error) {
            console.log(error);
        }
    }

    let userData;
    try {
        userData = await User.findOne({ email: userMagic.email }) || {}
        /*userData = await axios.get('http://localhost:3000/api/users', {
            params: {
                email: userMagic.email
            }
        }) || null;*/
    } catch (error) {
        console.log(error);
    }
    let userBoardgames;
    try {
        userBoardgames = await Boardgame.find({ ownerID: userMagic.email }) || {}
        /*userBoardgames = await axios.get('http://localhost:3000/api/boardgames', {
            params: {
                ownerID: userMagic.email
            }
        }) || null;*/
    } catch (error) {
        console.log(error);
    }

    var user = {
        userS: userMagic,
        userD: userData,
        userB: userBoardgames
    }

    console.log(user);
    res.json(user);


}