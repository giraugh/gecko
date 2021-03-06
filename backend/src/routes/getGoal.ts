import * as db from '../util/db'

export const getGoal = async (req, res) => {
    try {
        const goal = await db.getGoal(req.query.id)
        return res.json({ success: true, goal })
    } catch (error) {
        if (error.name == db.NO_SUCH_ROW_ERR) {
            return res.status(404).json({ success: false, error })
        } else {
            return res.status(500).json({ success: false, error })
        }
    }
}
