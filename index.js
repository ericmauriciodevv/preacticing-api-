const express = require('express')
const app = express()

const courses = [
    {id: 1, name: 'curse1'},
    {id: 2, name: 'curse2'},
    {id: 3, name: 'FuckU'}
]

app.get('/api/courses', (req, res) => {
    res.send(courses)
})

app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id))
    if (!course) {send.state(404).
    res.send(course)}else{send('you course dont be founded ')}
})

app.get('/api/posts/:year/:mont', (req, res) => {
    res.send(req.params)
})
app.get('/', (req, res) => {
    res.send('hello world!!!')
});
const port = process.env.PORT || 3000

app.listen(port, () => {console.log('listening at port')})
app.post('/api/course', (req, res) => {
    const course = {
        names: req.body
    }   
    courses.send(course)
    res.send(course)
}) 

app.get('/FuckU/course', (req, res) => {
    res.send("fuck UUUUUU")
    courses.id === parseInt(req.params.course)

})
