const express = require('express');
const router = express.Router();
const Thought = require('../models/Thought');

// GET to get all thoughts
router.get('/', async (req,res) => {
    try {
        const thought = await Thought.find()
        res.json(thought)
    } catch (err){
        res.status(500).json({message: err.message})
    }
})

// GET to get a single thought by its _id
router.get ('/:id', getThought, (req,res)=> {
    res.send(res.thought)
    })



// POST to create a new thought (don't forget to push the created thought's _id to the associated user's thoughts array field)
router.post('/', async (req,res) => {
    const thought = new Thought({
        // add in all the fields I need to create
    })
    try {
        const newThought = await thought.save() 
            // add in all the fields I need to create
    
        res.status(201).json(newThought)
    } catch (err){
        res.status(400).json({message: err.message})
    }
})

// // example data
// {
//   "thoughtText": "Here's a cool thought...",
//   "username": "lernantino",
//   "userId": "5edff358a0fcb779aa7b118b"
// }
// PUT to update a thought by its _id
router.patch ('/:id', getThought, async (req,res) =>{
    if (req.body.reactionId ===! null){
        res.thought.reactionId = req.body.reactionId
    }
    if (req.body.thoughtText ===! null){
        res.thought.thoughtText = req.body.thoughtText
    }
    try {
        const updatedThought = await res.though.save()
        res.json(updatedThought)
    }
    catch (err){
        res.status(400).json ({message: err.message})
    }
})

// DELETE to remove a thought by its _id
router.delete ('/:id', getThought, async (req,res) =>{
    try {
        await res.thought.remove()
        res.json({message: 'Thought deleted!'});
    }catch (err) {
        res.status(500).json({message: err.message})
    }
})

// /api/thoughts/:thoughtId/reactions

// POST to create a reaction stored in a single thought's reactions array field

// DELETE to pull and remove a reaction by the reaction's reactionId value

async function getThought (req,res,next) {
try {
    thought = await Thought.findById(req.params.id)
    if (thought == null){
        return res.status(404).json ({message: 'Cannot find thought.'})
    }
} catch (err){
    return res.status(500).json({message: err.message})
}
res.thought = thought
next()
}

module.exports = router;