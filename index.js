const express = require('express');
const jwt = require('jsonwebtoken');
const apiRoutes = require('./routes/apiRoutes');
const errorHandler = require('./middleware/error');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = 3000;

app.use('/api', apiRoutes);
app.use(errorHandler);

app.listen(PORT, () => {
     console.log(`Listening on port ${PORT}`);
});