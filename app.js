const express = require('express')
const ejs = require('ejs')
const path = require('path')
const axios = require('axios')

const app = express()

app.use(express.static(__dirname))

app.set('views', path.join(__dirname, '/templates'));
app.set('view engine', 'ejs');

/**
 * Home Page & Post List Page
 */
app.get('/', async (req, res) => {
    const response = await axios.get('https://raw.githubusercontent.com/getgridea/mock-json/master/list.json')
    response.data.themeConfig.domain = ''
    res.render('index', {...response.data})
})

/**
 * Post Page
 */
app.get('/post/:postName', async (req, res) => {
    const response = await axios.get('https://raw.githubusercontent.com/getgridea/mock-json/master/post.json')
    response.data.themeConfig.domain = ''
    res.render('post', {...response.data})
})

/**
 * Archives Page
 */
app.get('/archives', async (req, res) => {
    const response = await axios.get('https://raw.githubusercontent.com/getgridea/mock-json/master/archives.json')
    response.data.themeConfig.domain = ''
    res.render('archives', {...response.data})
})

/**
 * tags Page
 */
app.get('/tags', async (req, res) => {
    const response = await axios.get('https://raw.githubusercontent.com/getgridea/mock-json/master/tags.json')
    response.data.themeConfig.domain = ''
    res.render('tags', {...response.data})
})

/**
 * tag Page
 */
app.get('/tag/:tagName', async (req, res) => {
    const response = await axios.get('https://raw.githubusercontent.com/getgridea/mock-json/master/tag.json')
    response.data.themeConfig.domain = ''
    res.render('tag', {...response.data})
})

//使用8080端口
app.listen(3001)
console.log("The server is running on 3001")
