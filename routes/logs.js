const express = require('express');
const router = express.Router();
const Log = require('../models/Log');

//@route GET /logs
//@desc Route to get all the logs

router.get('/', async (req, res) => {
  try {
    const logs = await Log.find();
    res.status(200).json(logs);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Internal Server Error');
  }
});

//@route POST /logs
//@desc Route to insert a new log

router.post('/', async (req, res) => {
  try {
    const logs = await Log.find().sort({ id: -1 });
    let id = 1;

    if (logs.length > 0) {
      id = logs[0].id + 1;
    }

    const { message, date, tech } = req.body;
    const newLog = new Log({
      id,
      message,
      date,
      tech
    });

    const log = await newLog.save();
    res.status(200).json(log);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Internal Server Error');
  }
});

//@route PUT /logs/:id
//@desc Route to update a log

router.put('/:id', async (req, res) => {
  try {
    const updatedLog = { ...req.body };

    const log = await Log.findOneAndUpdate({ id: req.params.id }, updatedLog, {
      new: true
    });

    res.status(200).json(log);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Internal Server Error');
  }
});

//@route DELETE /logs/:id
//@desc Route to delete a log

router.delete('/:id', async (req, res) => {
  try {
    const log = await Log.find({ id: req.params.id });

    if (!log) return res.status(400).send('Log Not Found');

    await Log.findOneAndDelete({ id: req.params.id });

    res.status(200).send('Log Deleted Successfully');
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
