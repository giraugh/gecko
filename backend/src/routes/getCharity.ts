import * as db from '../util/db'

export const getCharity = async (req, res) => {
    try {
        const charity = await db.getCharity(req.query.id)
        return res.json({ success: true, charity })
    } catch (error) {
        if (error.name == db.NO_SUCH_ROW_ERR) {
            return res.status(404).json({ success: false, error })
        } else {
            return res.status(500).json({ success: false, error })
        }
    }
}

