import * as db from '../util/db'

export const createGoal = async (req, res) => {
    try {
        const goal = await db.createGoal(req.body)
        res.json({ success: true, goal })
    } catch (error) {
        res.status(500)
           .json({ success: false, error })
    }
}
