import * as db from '../util/db'

export const getRefereedGoals = async (req, res) => {
    try {
        const goals = await db.getSponsoredGoals(req.query.id)
        return res.json({ success: true, goals })
    } catch (error) {
        return res.status(500).json({ success: false, error })
    }
}
