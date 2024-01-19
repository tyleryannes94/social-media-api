const express = require('express');
const router = express.Router();
const Thought = require('../models/Thought');

// GET to get all thoughts
router.get('/', async (req,res) => {
    try {
        const thoughts = await Thought.find()
        res.json(thoughts)
    } catch (err){
        res.status(500).json({message: err.message})
    }
})

// GET to get a single thought by its _id


// POST to create a new thought (don't forget to push the created thought's _id to the associated user's thoughts array field)
router.post('/', async (req,res) => {
    const thoughts = new Thought({
        // add in all the fields I need to create
    })
    try {
        const newThought = await thoughts.save() 
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

// DELETE to remove a thought by its _id

// /api/thoughts/:thoughtId/reactions

// POST to create a reaction stored in a single thought's reactions array field

// DELETE to pull and remove a reaction by the reaction's reactionId value


module.exports = router;