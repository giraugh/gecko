import * as db from '../util/db'

export const createUser = async (req, res) => {
    try {
        const user = await db.createUser(req.body)
        res.json({ success: true, user })
    } catch (error) {
        res.status(500)
           .json({ success: false, error })
    }
}
