import mongoose, { Document, Schema } from 'mongoose';
import IRestaurant from './restaurant.model';
import { ObjectId } from 'mongodb';

interface IDish {
  name: string,
  price: number,
  ingredients?: string,
  tags?: string,
  restaurant: IRestaurant
};

const dishSchema = new mongoose.Schema<IDish>({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  ingredients: [{ type: String }],
  tags: [{ type: String }],
  restaurant: { type: ObjectId, ref: 'Restaurant', required: true },
});

export const DishModel = mongoose.model('Dish', dishSchema);
export default IDish;