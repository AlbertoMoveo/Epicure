import mongoose from 'mongoose';
import IDish from './dish.model';
import IChef from './chef.model';
import { ObjectId } from 'mongodb';

interface IRestaurant {
  name: string,
  image: string,
  chef: IChef,
  dishes?: IDish[],
  isActive?: boolean
};

const restaurantSchema = new mongoose.Schema<IRestaurant>({
  name: { type: String, required: true },
  image: { type: String, required: true },
  chef: { type: ObjectId, ref: 'Chef', required: true },
  dishes: [{ type: ObjectId, ref: 'Dish' }],
  isActive: { type: Boolean, default: true }
});

export const RestaurantModel = mongoose.model('Restaurant', restaurantSchema);
export default IRestaurant;