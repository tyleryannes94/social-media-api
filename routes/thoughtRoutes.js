const express = require('express');
const router = express.Router();
const Thought = require('../models/Thought');
const User = require('../models/User');

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
        thoughtText: req.body.thoughtText,
        username: req.body.username,
    })
    try {
        const newThought = await thought.save() 
            // add in all the fields I need to create
            await User.findByIdAndUpdate(req.body.userId, { $push: { thoughts: newThought._id } });

        res.status(201).json(newThought)
    } catch (err){
        res.status(400).json({message: err.message})
    }
})

router.patch ('/:id', getThought, async (req,res) =>{
    if (req.body.thoughtText != null) {
        res.thought.thoughtText = req.body.thoughtText
    }
    if (req.body.username != null) {
        res.thought.username = req.body.username;
    }
    try {
        const updatedThought = await res.thought.save();
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
router.post('/:thoughtId/reactions', async (req, res) => {
    try {
        const thought = await Thought.findById(req.params.thoughtId);
        if (!thought) {
            return res.status(404).json({ message: "Thought not found." });
        }

        const newReaction = {
            reactionBody: req.body.reactionBody,
            username: req.body.username,
        };

        thought.reactions.push(newReaction);
        await thought.save();
        res.status(201).json(newReaction);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// DELETE to pull and remove a reaction by the reaction's reactionId value
router.delete('/:thoughtId/reactions/:reactionId', async (req, res) => {
    try {
        const thought = await Thought.findById(req.params.thoughtId);
        if (!thought) {
            return res.status(404).json({ message: "Thought not found." });
        }

        // Remove the reaction by reactionId
        thought.reactions = thought.reactions.filter(reaction => reaction._id.toString() !== req.params.reactionId);
        await thought.save();
        res.json({ message: 'Reaction removed' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

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