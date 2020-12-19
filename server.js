const express = require('express');
const app = express()

const port = process.env.PORT || 8080;

app.use(express.static('public'))
app.set('view engine', 'ejs')

//templating here
app.get('/', (req, res) => {
    res.render('pages/index')
})

app.get('/release/fallin',  (req, res) => {
    res.redirect('https://distrokid.com/hyperfollow/slan/fallin')
})

app.listen(port, () => console.log('listening on port 8080'))