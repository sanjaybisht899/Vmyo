import express from 'express';
import {
  getAllRestaurants,
  getRestaurantById,
  addRestaurant,
  deleteRestaurantById,
  updateRestaurantById,
} from './controller.js';

const router = express.Router();
router.get('', (req, res) => {
  res.json("Hello this is the backend");
});

router.get('/restaurant', getAllRestaurants);
router.get('/restaurant/:id', getRestaurantById);
router.post('/add', addRestaurant);
router.delete('/delete/:id', deleteRestaurantById);
router.put('/update/:id', updateRestaurantById);

export default router;
