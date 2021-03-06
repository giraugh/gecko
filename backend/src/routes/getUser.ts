import * as db from '../util/db'

export const getUser = async (req, res) => {
    try {
        const user = await db.getUser(req.query.id)
        return res.json({ success: true, user })
    } catch (error) {
        return res.status(500).json({ success: false, error })
    }
}

