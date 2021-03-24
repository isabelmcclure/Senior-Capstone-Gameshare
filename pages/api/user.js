import Iron from '@hapi/iron'
import CookieService from '../../util/cookie'

export default async (req, res) => {
    let user;
    try {
        user = await Iron.unseal(CookieService.getAuthToken(req.cookies), process.env.ENCRYPTION_SECRET, Iron.defaults)
    } catch (error) {
        res.status(401).end()
    }

    res.json(user)
}