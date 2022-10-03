const express = require('express')

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({ message: 'server start' })
})

const database = [
    {
        id: 1,
        title: 'is title',
        is_complete: false
    },
    {
        id: 2,
        title: 'is title',
        is_complete: false
    }
]

app.get('/todos', (req, res) => {
    res.status(200).json(database)
})

app.post('/todos', (req, res) => {

    const { id, title } = req.body

    if (!id || !title) {
        res.status(400).json({ message: 'value is not defined' })
    } else {
        database.push({
            id,
            title,
            is_complete: false
        })

        res.status(200).json(database)
    }

})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log('Success 😺😺😺 ' + PORT))