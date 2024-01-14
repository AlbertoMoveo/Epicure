import mongoose, { Schema } from 'mongoose';
import IRestaurant from './restaurant.model';
import { ObjectId } from 'mongodb';

interface IChef {
  name: string,
  image: string,
  description: string,
  restaurants?: IRestaurant[]
};

const chefSchema = new mongoose.Schema<IChef>({
  name: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String,  required: true },
  restaurants: [{ type: ObjectId, ref: 'Restaurant' }],
});

export const ChefModel = mongoose.model('Chef', chefSchema);
export default IChef;