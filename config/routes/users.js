const express = require('express');
const router = express.Router();
const User = require('../db/models/User');


router.get('/', async (req, res) => {
    try {
        const result = await User.find(req.query);

        res.json(result);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});

router.post('/', async (req, res) => {
    try {
        (new User({
            'name': req.body.name,
            'age': req.body.age
        }))
            .save()
            .then((user) => res.send(user));
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});

router.patch('/:id', (req, res) => {
    try {
        User.findOneAndUpdate({ '_id': req.params.id }, { $set: req.body }, { new: true })
            .then((user) => res.send(user));
    } catch (error) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

router.delete('/:id', (req, res) => {
    try {
        User.deleteOne({ '_id': req.params.id })
            .then((user) => res.send(user));
    } catch (error) {
        console.error(err.message);
        res.status(500).send('Server Error');        
    }
});


module.exports = router;
