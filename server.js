const express= require('express')
const mongoose = require('mongoose')
const bodyParser= require('body-parser')
const PORT =process.env.PORT || 5000
const app =  express()
const morgan= require('morgan')
const cors= require('cors')

//
const productRouter= require('./router/productRouter')

// MongoDB databese setup
mongoose.connect('mongodb://localhost/crud',{useNewUrlParser:true, useUnifiedTopology:true}, (err)=>{
    if(err){
        console.log(err, 'Database connection failed')
    }
    console.log('Database connection successfull')

})

// use middleware
app.use(morgan('dev'))
app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(productRouter)


// run server
app.listen(PORT , ()=>{
    console.log('Server started on port :' , PORT)
})
