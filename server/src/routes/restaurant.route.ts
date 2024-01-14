import { Router } from 'express';
import { RestaurantModel } from '../models/restaurant.model';

const router = Router();

// Post
router.post('/restaurants', async (req, res) => {
  try {
    const newRestaurant = await RestaurantModel.create(req.body);
    return res.status(200).json(newRestaurant);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Get all
router.get('/restaurants', async (req, res) => {
  try {
    const restaurants = await RestaurantModel.find();
    const activeRestaurants = restaurants.filter((restaurant) => restaurant.isActive);
    return res.status(200).json(activeRestaurants);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Get
router.get('/restaurants/:id', async (req, res) => {
  try {
    const restaurant = await RestaurantModel.findById(req.params.id);
    if (!restaurant || !restaurant.isActive) {
      return res.status(404).json({ error: 'Restaurant not found'});
    }
    return res.status(200).json(restaurant);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Update
router.put('/restaurants/:id', async (req, res) => {
  try {
    const updatedRestaurant = await RestaurantModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedRestaurant) {
      return res.status(404).json({ error: 'Restaurant not found'});
    }
    return res.status(200).json(updatedRestaurant);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error'});
  }
});

// Delete
router.delete('/restaurants/:id', async (req, res) => {
  try {
    const deletedRestaurant = await RestaurantModel.findByIdAndUpdate(req.params.id, { isActive: false }, { new: true });
    if (!deletedRestaurant) {
      return res.status(404).json({ error: 'Restaurant not found'});
    }
    return res.status(200).json(deletedRestaurant);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error'});
  }
});

export default router;