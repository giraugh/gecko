import express from 'express'
import expectFields from './src/middleware/expectFields'
import {
    getUser,
    getGoal,
    getAuthoredGoals,
    getRefereedGoals,
    createGoal,
    createUser
} from './src/routes/routes'

const app = express()
app.use(express.json())

// Required fields for POST routes
const createUserFields = ['email', 'phone']
const createGoalFields = [
    'author', 
    'friend',
    'amount',
    'endDate',
    'startDate'
]

// Declare routes
app.get('/', async (req, res) => res.send('Gecko Backend'))
app.get('/users', expectFields(['id'], 'query'), getUser)
app.get('/goals', expectFields(['id'], 'query'), getGoal)
app.get('/goals/authored', expectFields(['id'], 'query'), getAuthoredGoals)
app.get('/goals/refereed', expectFields(['id'], 'query'), getRefereedGoals)
app.post('/users', expectFields(createUserFields, 'body'), createUser)
app.post('/goals', expectFields(createGoalFields, 'body'), createGoal)

// Startup app
const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Now listening on ${port}...`)
})

