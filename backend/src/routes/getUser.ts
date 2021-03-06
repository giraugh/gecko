import * as db from '../util/db'

export const getUser = async (req, res) => {
    try {
        const user = await db.getUser(req.query.id)
        return res.json({ success: true, user })
    } catch (error) {
        if (error.name == db.NO_SUCH_ROW_ERR) {
            return res.status(404).json({ success: false, error })
        } else {
            return res.status(500).json({ success: false, error })
        }
    }
}

