import * as db from '../util/db'

export const setGoalComplete = async (req, res) => {
    try {
        const goal = await db.setGoalComplete(req.body.id, req.body.completed)
        res.json({ success: true, goal })
    } catch (error) {
        res.status(500)
           .json({success: false, error})
    }
}
