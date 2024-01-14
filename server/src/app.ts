import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from'dotenv';

import chefRoutes from './routes/chef.route';
import restaurantRoutes from './routes/restaurant.route';
import dishRoutes from './routes/dish.route';

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

app.use('/api', chefRoutes);
app.use('/api', restaurantRoutes);
app.use('/api', dishRoutes);

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
