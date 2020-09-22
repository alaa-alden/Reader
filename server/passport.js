// const passport = require('passport')
// const LocalStratgy = require('passport-local').Strategy
// const JwtStartegy = require('passport-jwt').Strategy
// const User = require('./models/User')

// const cookieExtractor = req => {
//     let token = null
//     if (req && req.cookies)
//         token = req.cookies['access_token']
//     return token
// }
// //  authorization 
// passport.use(new JwtStartegy({
//     jwtFromRequest: cookieExtractor,
//     secretOrKey: "hero"
// }, (payload, done) => {
//     User.findById(
//         { _id: payload.sub },
//         (err, user) => {
//             if (err)
//                 return done(err, false)
//             if (user)
//                 return done(null, user)
//             else return done(null, false)
//         })
// }))
// // authontacated local stratgy using user & password when we login 
// passport.use(new LocalStratgy((username, password, done) => {
//     User.findOne({ username }, (err, user) => {
//         if (err)
//             // SOMETHING WENT WRONG WITH DATABASE 
//             return done(err)
//         //IF NO USER EXIST
//         if (!user)
//             return done(null, false)
//         // check if password is correct
//         user.comparePassword(password, done)
//     })
// }))
// // module.exports=passport