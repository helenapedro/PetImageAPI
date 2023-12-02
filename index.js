const express = require('express');
const jwt = require('jsonwebtoken');
const apiRoutes = require();
const errorHandler = require('./middleware/errorMiddleware');


const app = express();
const PORT = 3000;
const SECRET_KEY = 

app.use('/api', apiRoutes);
app.use(errorHandler);

app.listen(PORT, () => {
     console.log('Listening on port ${PORT}');
});