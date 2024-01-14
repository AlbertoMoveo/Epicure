import { Router } from 'express';
import { DishModel } from '../models/dish.model';

const router = Router();

// Get all
router.get('/dishes', async (req, res) => {
  try {
    const dishes = await DishModel.find();
    res.json(dishes);
  } catch (error) {
    res.status(500).json({ error: 'Internal Serer Error'});
  }
});

// Get
router.get('/dishes/:id', async (req, res) => {
  try {
    const dish = await DishModel.findById(req.params.id);
    if (!dish) {
      return res.status(404).json({ error: 'Dish not found' });
    }
    res.json(dish)
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Create
router.post('/dishes', async (req, res) => {
  try {
    const newDish = await DishModel.create(req.body);
    res.json(newDish);
  } catch (error){
    res.status(500).json({ error: "Internal Server Error" });
  }
})

// Update
router.put('dishes/:id', async (req, res) => {
  try {
    const updatedDish = await DishModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedDish) {
      return res.status(404).json({ error: 'Dish not found'});
    }
    res.json(updatedDish);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error'});
  }
});

// Delete
router.delete('/dishes/:id', async (req, res) => {
  try {
    const deletedDish = await DishModel.findById(req.params.id);
    if (!deletedDish) {
      return res.status(404).json({ error: 'Dish not found'});
    }
    res.json(deletedDish);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error'});
  }
});

export default router;