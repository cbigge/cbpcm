const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const db = require('./db')
const exerciseRouter = require('./routes/exercise-router')
const nutritionRouter = require('./routes/nutrition-router')

// define the Express app
const app = express();
const apiPort = 8081

// enhance your app security with Helmet
app.use(helmet());

// use bodyParser to parse application/json content-type
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

// enable all CORS requests
app.use(cors());

// log HTTP requests
app.use(morgan('combined'));

app.get('/', (req, res) => {
   res.send("Hello world") 
})

app.use('/api/exercises', exerciseRouter)
app.use('/api/nutrition', nutritionRouter)

// start the server
app.listen(apiPort, () => {
    console.log('listening on port 8081');
});
