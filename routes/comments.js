const { Comment, validate } = require('../models/comment');
const express = require('express');
const router = express.Router();


// All endpoints and route handlers go here
////////////////////////////////////////////////////////// GET //////////////////////////////////////////
router.get('/', async (req, res) => {
    try {
    const comments = await Comment.find();
    return res.send(comments);
    } catch (ex) {
    return res.status(500).send(`Internal Server Error: ${ex}`);
}});
////////////////////////////////////////////////////////// GET By ID //////////////////////////////////////////
router.get('/:id', async (req, res) => {
    try {
   
    const comment = await Comment.findById(req.params.id);
    if (!comment)
    return res.status(400).send(`The comment with id "${req.params.id}" does not exist.`);
    return res.send(comment);
    } catch (ex) {
    return res.status(500).send(`Internal Server Error: ${ex}`);
    }
});
////////////////////////////////////////////////////////// POST //////////////////////////////////////////
 router.post('/', async (req, res) => {
    try {
        const { error } = validate(req.body);  
        if (error)
        return res.status(400).send(error);
   
    const comment = new Comment({

    text: req.body.text,
    likes: req.body.likes,
    dislikes: req.body.dislikes, 
    videoId: req.body.videoId,
    });

    await comment.save();
    return res.send(comment);
    } catch (ex) {
    return res.status(500).send(`Internal Server Error: ${ex}`);
    }
}); 
//////////////////////////////////////////////////////////////////// PUT ////////////////////////////////////////
router.put('/:id', async (req, res) => {
    try {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error);
    const comment = await Comment.findByIdAndUpdate(
    req.params.id,
    {
        text: req.body.text,
        likes: req.body.likes,
        dislikes: req.body.dislikes, 
        videoId: req.body.videoId,
    },
    { new: true }
    );
    if (!comment)
    return res.status(400).send(`The comment with id "${req.params.id}" d
   oes not exist.`);
    await comment.save();
    return res.send(comment);
    } catch (ex) {
    return res.status(500).send(`Internal Server Error: ${ex}`);
    }
}); 
//////////////////////////////////////////////////////////////////// DELETE ////////////////////////////////////////
router.delete('/:id', async (req, res) => {
    try {
   
    const comment = await Comment.findByIdAndRemove(req.params.id);
    if (!comment)
    return res.status(400).send(`The comment with id "${req.params.id}" does not exist.`);
    return res.send(comment);
    } catch (ex) {
    return res.status(500).send(`Internal Server Error: ${ex}`);
    }
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////
module.exports = router;