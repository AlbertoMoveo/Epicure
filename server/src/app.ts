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

const cors = require('cors');
app.use(cors());

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