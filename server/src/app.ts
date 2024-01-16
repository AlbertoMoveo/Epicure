import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from'dotenv';

import apiRoutes from './routes/api.route';

const app = express();
dotenv.config();
app.use(bodyParser.json());

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

// Controllers and Handlers separetly (done), API routes in layers (done)

// (done) Search API call - response is of three arrays that each of these is an object relevant to the search value - only in the name

// (done) Change response in get to instead of returning the ID to get the whole object (2 possible ways) - only for one object