const bodyParser = require('body-parser')
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');
// const patch = require('path')
const router = require('./routes/book.route');

const app = express()
const port = 3000

app.use(cors({
    methods : 'GET,POST,PUT,DELETE',
    origin : ['http://localhost:8081'],
    credentials : true,
}))

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.options('*', cors())

app.use('/api/v1/books',router)


mongoose.connect("mongodb+srv://Knon:no5qPWSCL7hSl1QJ@cluster0.qgk80.mongodb.net/Air-Card-API?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("connected to database");
    app.listen(port,()=>{
        console.log(`it's alive on http://localhost:${port}`)
    })
})
.catch(()=>{
    console.log("connection field!")
})