const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const patientRoutes = require('./routes/patients');

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb+srv://gnanananda:Gnani%401744@cluster0.nvope.mongodb.net/patientDB?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.json());
app.use(express.static('public'));
app.use('/api/patients', patientRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
