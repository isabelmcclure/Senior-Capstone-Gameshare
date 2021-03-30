import Iron from '@hapi/iron'
import CookieService from '../../util/cookie'
import axios from 'axios'


export default async (req, res) => {
    let userMagic;
    try {
        userMagic = await Iron.unseal(CookieService.getAuthToken(req.cookies), process.env.ENCRYPTION_SECRET, Iron.defaults)
    } catch (error) {
    }

    // now we have access to the data inside of user
    // and we could make database calls or just send back what we have
    // in the token.
    try {
        await axios.post('http://localhost:3000/api/users', {
            email: user.email,
            rating: 5,
        })
    } catch (error) {

    }

    let userData;
    try {
        userData = await axios.get('http://localhost:3000/api/users', {
            params: {
                email: user.email
            }
        })
    } catch (error) {

    }
    let userBoardgames;
    try {
        userBoardgames = await axios.get('http://localhost:3000/api/boardgames', {
            params: {
                ownerID: user.email
            }
        })
    } catch (error) {

    }

    //console.log(userData.data.data);
    res.json({
        user: userMagic,
        userData: userData,
        userBoardgames: userBoardgames
    });


}