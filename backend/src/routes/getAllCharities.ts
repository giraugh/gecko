import * as db from '../util/db'

export const getAllCharities = async (req, res) => {
    try {
        const charities = await db.getAllCharities()
        return res.json({ success: true, charities })
    } catch (error) {
        return res.status(500).json({ success: false, error })
    }
}

