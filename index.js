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
    const todo = req.body

    database.push({
        id: todo.id,
        title: todo.title,
        is_complete: false
    })

    res.status(200).json(database)
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log('Success 😺😺😺 ' + PORT))