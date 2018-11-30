const express = require('express')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const session = require('express-session')
const cors = require('cors') 
require("./db/db");
const app = express()



// Middleware
app.use(session({
    secret:'Session secret',
    resave: false,
    saveUninitialized: false
}))
app.use(methodOverride('_method'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
    optionsSuccessStatus: 200
  }
app.use(cors(corsOptions));


app.get('/', async(req, res) => {
    
    console.log('You made it this far')
    res.send('Root of App')
})

app.listen(8000, () => {
    console.log('Can you hear me now?')
})