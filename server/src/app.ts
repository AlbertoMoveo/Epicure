import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import { swaggerSetup } from './utils/swagger';

import apiRoutes from './routes/api/api.route';

const app = express();
dotenv.config();
app.use(bodyParser.json());
swaggerSetup(app);

const uri: string = `${process.env.MONGODB_URI}`;

async function connect() {
  try {
    console.log('trying to connect to DB');
    await mongoose.connect(uri);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.log('Error occured while trying to connect to MongoDB');
    console.error(error);
  }
}

app.use('/api', apiRoutes);

async function startServer() {
  try {
    await connect();
    const PORT = process.env.PORT || 3001;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Error starting server:', error);
  }
}

startServer();

// Version (done), Handlers (done), Delete (done), Local mongoDB (done)

// (done) Controllers and Handlers separetly, API routes in layers (done)

// (done) Search API call - response is of three arrays that each of these is an object relevant to the search value - only in the name

// (done) Change response in get to instead of returning the ID to get the whole object (2 possible ways) - only for one object


// aggregate func that takes an array of objects of steps 

// (done) separate routes into directories 

// use aggregation in db query to bring only active dishes 

// (done) API documentation (swagger) under /api 

// (done) parallelize calls for matches between objects

// (done) change query from endpoint to parameter (post - body) / (get - query param) -> use get 