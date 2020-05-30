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
module.exports =router