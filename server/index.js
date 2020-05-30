const express =require('express')
const expressValidator = require("express-validator");
const next=require('next')
// const path=require('path')

const routes=require('./routes')
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
    server.use(express.json())
    // server.use(cookieParser(COOKIE_SECRET));
    /* Express Validator will validate form data sent to the backend */
    server.use(expressValidator())
    server.listen(PORT,()=>{
        console.log(`http://localhost:${PORT}`)
    })
    server.use('/',routes)
    server.get('*',handle)
})
