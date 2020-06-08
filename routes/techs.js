const express = require('express');
const router = express.Router();
const Tech = require('../models/Tech');

//@route GET /techs
//@desc Route to get all techs

router.get('/', async (req, res) => {
  try {
    const techs = await Tech.find();
    res.status(200).json(techs);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Internal Server Error');
  }
});

//@route POST /techs
//@desc Route to add a new tech

router.post('/', async (req, res) => {
  try {
    const techs = await Tech.find().sort({ id: -1 });
    let id = 1;

    if (techs.length > 0) {
      id = techs[0].id + 1;
    }

    const { firstName, lastName } = req.body;
    const newTech = new Tech({
      id,
      firstName,
      lastName
    });

    const tech = await newTech.save();
    res.status(200).json(tech);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Internal Server Error');
  }
});

//@route DELETE /techs
//@desc Route to delete a tech

router.delete('/:id', async (req, res) => {
  try {
    const tech = await Tech.find({ id: req.params.id });

    if (!tech) return res.status(404).send('Tech Not Found');

    await Tech.findOneAndDelete({ id: req.params.id });
    res.status(200).send('Tech Deleted Successfully');
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
