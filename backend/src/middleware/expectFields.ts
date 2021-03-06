const expectFields = (fields, key='body') =>
    async (req, res, next) => {
        for (let field of fields) {
            if (req[key][field] == undefined) {
                return res.status(400).json({
                    success: false,
                    error: `Expected ${key} field '${field}'`
                })
                    
            }
        }
        next()
    }

export default expectFields
