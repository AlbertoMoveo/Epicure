import { Router } from 'express';
import { DishModel } from '../models/dish.model';

const router = Router();

// Get all
router.get('/dishes', async (req, res) => {
  try {
    const dishes = await DishModel.find();
    const activeDishes = dishes.filter((dish) => dish.isActive);
    return res.status(200).json(activeDishes);
  } catch (error) {
    res.status(500).json({ error: 'Internal Serer Error'});
  }
});

// Get
router.get('/dishes/:id', async (req, res) => {
  try {
    const dish = await DishModel.findById(req.params.id);
    if (!dish || !dish.isActive) {
      return res.status(404).json({ error: 'Dish not found' });
    }
    return res.status(200).json(dish)
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Post
router.post('/dishes', async (req, res) => {
  try {
    const newDish = await DishModel.create(req.body);
    return res.status(200).json(newDish);
  } catch (error){
    res.status(500).json({ error: "Internal Server Error" });
  }
})

// Update
router.put('/dishes/:id', async (req, res) => {
  try {
    const updatedDish = await DishModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedDish) {
      return res.status(404).json({ error: 'Dish not found'});
    }
    return res.status(200).json(updatedDish);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error'});
  }
});

// Delete
router.delete('/dishes/:id', async (req, res) => {
  try {
    const deletedDish = await DishModel.findByIdAndUpdate(req.params.id, { isActive: false }, { new: true });
    if (!deletedDish) {
      return res.status(404).json({ error: 'Dish not found'});
    }
    return res.status(200).json(deletedDish);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error'});
  }
});

export default router;