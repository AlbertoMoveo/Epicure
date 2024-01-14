import { Router } from 'express';
import { RestaurantModel } from '../models/restaurant.model';

const router = Router();

// Get all
router.get('/restaurants', async (req, res) => {
  try {
    const restaurants = await RestaurantModel.find();
    res.json(restaurants);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Get
router.get('/restaurants/:id', async (req, res) => {
  try {
    const restaurant = await RestaurantModel.findById(req.params.id);
    if (!restaurant) {
      return res.status(404).json({ error: 'Restaurant not found'});
    }
    res.json(restaurant);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Update
router.put('restaurants/:id', async (req, res) => {
  try {
    const updatedRestaurant = await RestaurantModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedRestaurant) {
      return res.status(404).json({ error: 'Restaurant not found'});
    }
    res.json(updatedRestaurant);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error'});
  }
});

// Delete
router.delete('/restaurants/:id', async (req, res) => {
  try {
    const deletedRestaurant = await RestaurantModel.findById(req.params.id);
    if (!deletedRestaurant) {
      return res.status(404).json({ error: 'Restaurant not found'});
    }
    res.json(deletedRestaurant);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error'});
  }
});

export default router;