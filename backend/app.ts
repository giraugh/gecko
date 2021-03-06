import express from 'express'
import cors from 'cors'
import expectFields from './src/middleware/expectFields'
import {
    getUser,
    getGoal,
    getCharity,
    getAllCharities,
    getAuthoredGoals,
    getRefereedGoals,
    createGoal,
    createUser
} from './src/routes/routes'

const app = express()
app.use(express.json())
app.use(cors())

// Required fields for POST routes
const createUserFields = ['email', 'phone', 'name']
const createGoalFields = [
    'author', 
    'friend',
    'amount',
    'endDate',
    'startDate',
    'charity'
]

// Declare routes
app.get('/', async (req, res) => res.send('Gecko Backend'))
app.get('/users', expectFields(['id'], 'query'), getUser)
app.get('/goals', expectFields(['id'], 'query'), getGoal)
app.get('/charities', expectFields(['id'], 'query'), getCharity)
app.get('/charities/all', getAllCharities)
app.get('/goals/authored', expectFields(['id'], 'query'), getAuthoredGoals)
app.get('/goals/refereed', expectFields(['id'], 'query'), getRefereedGoals)
app.post('/users', expectFields(createUserFields, 'body'), createUser)
app.post('/goals', expectFields(createGoalFields, 'body'), createGoal)

// Startup app
const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Now listening on ${port}...`)
})

