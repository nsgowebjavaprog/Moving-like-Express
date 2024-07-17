const express = require('express')
const path = require('path')
const blogs = require('../data/blogs')

const router = express.Router()


router.get('/',(req, res)=>{
    res.sendFile(path.join(__dirname, '../templates/index.html'))
})

router.get('/blogpost/:slug',(req, res)=>{
    myBlog = blogs.filter((e) =>{
        return e.slug == req.params.slug
    })
    console.log(myBlog)
    // blogs.forEach(e =>{
    //     console.log(e.title)
    // });
    res.sendFile(path.join(__dirname, '../templates/blogPage.html'))
})

module.exports = router