import express from 'express'
import {
    getUser,
    getGoal,
    createGoal,
    createUser
} from './src/routes/routes'

const app = express()

app.get('/', async (req, res) => {
    res.send('Gecko Backend')
})

app.get('/users', getUser)
app.get('/goals', getGoal)
app.post('/users', createUser)
app.post('/goals', createGoal)

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Now listening on ${port}...`)

})

