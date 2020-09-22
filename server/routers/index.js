// const express=require('express')
const ImageControllers=require('../controllers/imageControllers')
const router =require('express').Router()

router.get('/api/test',(req,res)=>{
    res.json({
        'test':'test'
    })
})
router.post('/api/process-image'
    // , ImageControllers.check
    , ImageControllers.uploadImage
    , ImageControllers.resizeImage
    , ImageControllers.process
    )
/**
* AUTH ROUTES: /api/auth
*/
// router.post(
//     "/api/auth/signup",
//     authController.validateSignup,
//     catchErrors(authController.signup)
// );
// router.post("/api/auth/signin", authController.signin);
// router.get("/api/auth/signout", authController.signout);

module.exports =router
