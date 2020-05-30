const multer =require('multer')
const jimp = require('jimp')
const tesseract = require("node-tesseract-ocr")
const fs=require('fs')

const imageUploadOptions = {
    storage: multer.memoryStorage(),
    limits: {
        // 1024*1024 number of kilo byte *number of mega byte
        // storing image files up to 1mb
        fileSize: 1024 * 1024 * 1
    },
    fileFilter: (req, file, next) => {
        if (file.mimetype.startsWith("image/"))
            next(null, true)
        // message to next fun ,then is true for to move on 
        else next(null, false)
    }
}

exports.uploadImage = multer(imageUploadOptions).single("image")

exports.resizeImage = async (req, file, next) => {
    if (!req.file) {
        return next()
    }
    const extension = req.file.mimetype.split('/')[1]
    req.body.image = `/global/uploads/${Date.now()}.${extension}`
    // for save image
    const image = await jimp.read(req.file.buffer)
    await image.resize(750, jimp.AUTO)
    await image.write(`./${req.body.image}`)
    next()
}

const config = {
    lang: "eng",
    oem: 1,
    psm: 3,
}

exports.process=(req,res)=>{
    if(!req.body.image)res.status(400).send(`image is not uploaded or you upload file but it's not image`)
    else tesseract.recognize(req.body.image.substring(1,req.body.image.length), config)
        .then(text => {
            res.json({
                'result': text
            })
        }).then(()=>{
            setTimeout(() => {
                fs.unlinkSync(`./${req.body.image}`)
            }, 400);
        })
        .catch(error => {
            console.log(error.message)
        })
}
// is not work 
// exports.check=(req,res,next)=>{
//     console.log(req.file)
//     req.body.imageName=req.file.originalname
//     req.sanitizeBody('imageName')    
//     req.checkBody('imageName','it is empty').notEmpty()
//     req.checkBody('imageName', "it isn't image").isImage(req.file.filename)
//     const errors=req.validationErrors()
//     if(errors){
//         const first_error=errors.map(err=>err.msg)[0]
//         return res.status(400).send(first_error)
//     }
//     next()
//}