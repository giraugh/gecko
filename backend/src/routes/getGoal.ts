import * as db from '../util/db'

export const getGoal = async (req, res) => {
    try {
        const user = await db.getGoal(req.query.id)
        return res.json({ success: true, user })
    } catch (error) {
        return res.status(500).json({ success: false, error })
    }
}
