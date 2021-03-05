import express from 'express'

const app = express()

app.get('/', async (req, res) => {
    res.send('Gecko Backend')
})

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Now listening on ${port}...`)

})

