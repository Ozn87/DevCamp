const express=require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const connectDB = require('./config/db')

//router files
const bootcamps = require('./routes/bootcamps')

//load env vars
dotenv.config({path:'./config/config.env'})

connectDB();

const app =express();

//Developer logger middleware
if(process.env.NODE_ENV ==='development'){
    app.use(morgan('dev'))
}

//mount routes
app.use('/api/v1/bootcamps', bootcamps)

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, console.log(`SERVER RUNNING IN ${process.env.NODE_ENV} MODE ON PORT ${PORT}`))

//handle unhandled errors

process.on('unhandledRejection',(err,promise)=>{
    console.log(`Error: ${err.message}`)
    //close server
    server.close(()=>process.exit(1))
})
