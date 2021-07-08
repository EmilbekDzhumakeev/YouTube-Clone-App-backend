const { Comment, validate } = require('../models/comment');
const express = require('express');
const router = express.Router();


// All endpoints and route handlers go here
 /*router.post('/', async (req, res) => {
    try {
        const { error } = validate(req.body);
        if (error)
        return res.status(400).send(error);
   
    const comment = new Comment({

    text: req.body.text,
    likes: req.body.likes,
    dislikes: req.body.dislikes,
    });

    await comment.save();
    return res.send(comment);
    } catch (ex) {
    return res.status(500).send(`Internal Server Error: ${ex}`);
    }
   }); 
   
*/ 
router.post('/', async (req, res) => {
    try {
   
    const comment = new Comment({
    text: 'Stanley Classic Vacuum Bottle',
    likes: 19.82, 
    dislikes: 1,
    });
    await comment.save();
    return res.send(comment);
    } catch (ex) {
    return res.status(500).send(`Internal Server Error: ${ex}`);
    }
   });

module.exports = router;