import { Router } from 'express';
import { ChefModel } from '../models/chef.model';

const router = Router();

// Post
router.post('/chefs', async (req, res) => {
  try {
    const newChef = await ChefModel.create(req.body);
    return res.status(200).json(newChef);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Get all
router.get('/chefs', async (req, res) => {
  try {
    const chefs = (await ChefModel.find());
    const activeChefs = chefs.filter((chef) => chef.isActive);
    return res.status(200).json(activeChefs);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Get
router.get('/chefs/:id', async (req, res) => {
  try {
    const chef = await ChefModel.findById(req.params.id);
    if (!chef || !chef?.isActive) {
      return res.status(404).json({ error: 'Chef not found' });
    }
    return res.status(200).json(chef);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Update
router.put('/chefs/:id', async (req, res) => {
  try {
    const updatedChef = await ChefModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedChef) {
      return res.status(404).json({ error: 'Chef not found' });
    }
    return res.status(200).json(updatedChef);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Delete
router.delete('/chefs/:id', async (req, res) => {
  try {
    const deletedChef = await ChefModel.findByIdAndUpdate(req.params.id, { isActive: false }, { new: true });
    if (!deletedChef) {
      return res.status(404).json({ error: 'Chef not found' });
    }
    return res.status(200).json(deletedChef);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;
