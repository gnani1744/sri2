const express = require('express');
const router = express.Router();
const Patient = require('../models/patient');

router.post('/', async (req, res) => {
    try {
        const patient = new Patient(req.body);
        await patient.save();
        res.status(201).send(patient);
    } catch (error) {
        res.status(400).send(error);
    }
});

module.exports = router;
