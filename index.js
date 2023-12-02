const express = require('express');
const jwt = require('jsonwebtoken');
const apiRoutes = require();

const app = express();
const PORT = 3000;
const SECRET_KEY = 

app.use('/api', apiRoutes);

app.listen(PORT, () => {
     console.log('Listening on port ${PORT}');
});