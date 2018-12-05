const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const cors = require('cors') 
require("./db/db");
const app = express()
const port =  process.env.PORT || 8000



// Middleware
app.use(session({
    secret:'Session secret',
    resave: false,
    saveUninitialized: false
}))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
    optionsSuccessStatus: 200
  }
app.use(cors(corsOptions));

const scheduleController = require('./controllers/scheduleController');
const newsController = require('./controllers/newsController')

app.use('/schedule', scheduleController)
app.use('/news', newsController)


app.get('/', async(req, res) => {
    res.send('Root of App')
})

app.listen({port}, () => {
    console.log('We\'re on 8000')
})