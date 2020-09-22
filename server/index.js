const express =require('express')
// const expressValidator = require("express-validator");
const next=require('next')
// const cookieParser = require('cookie-parser')
// const mongoose=require('mongoose')
// const path=require('path')

const routes=require('./routers')
const dev=process.env.NODE_ENV!=='production'
const PORT=process.env.PORT||8080
// const AUTH_USER_TYPE = "authenticated";
// const COOKIE_SECRET = "asldkfjals23ljk";
// const COOKIE_OPTIONS = {
//     httpOnly: true,
//     secure: !dev,
//     signed: true
// };

const app=next(
    {
        dev
    }
)

const handle=app.getRequestHandler()

app.prepare().then(()=>{
    const server=express()

//     for middleware
    //connect with database
    // mongoose.connect("mongodb://localhost:27017", { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    //     console.log("connected with database")
    // })
    server.use(express.json())
    // server.use(cookieParser())

    // server.use(cookieParser(COOKIE_SECRET));
    /* Express Validator will validate form data sent to the backend */
    // server.use(expressValidator())
    server.listen(PORT,()=>{
        console.log(`http://localhost:${PORT}`)
    })
    // const userRouter = require('./routers/User')
    // server.use('/user', userRouter)
    server.use('/',routes)
    server.get('*',handle)
})
