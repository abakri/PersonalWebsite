const express = require('express')
const app = express()

app.use(express.static('public'))
app.set('view engine', 'ejs')


//templating here
app.get('/', (req, res) => {
    res.render('pages/index')
})

app.get('/about', (req, res) => {
    res.render('pages/about')
})

app.get('/works', (req, res) => {
    res.render('pages/works')
})

app.get('/blog', (req, res) => {
    res.render('pages/blog')
})

app.get('/contact', (req, res) => {
    res.render('pages/contact')
})

app.get('/')

app.listen('8080', () => console.log('listening on port 8080'))