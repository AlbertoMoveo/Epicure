import mongoose, { Document, Schema } from 'mongoose';
import IDish from './dish.model';
import IChef from './chef.model';
import { ObjectId } from 'mongodb';

interface IRestaurant {
  name: string,
  image: string,
  chef: IChef,
  dishes?: IDish[]
};

const restaurantSchema = new mongoose.Schema<IRestaurant>({
  name: { type: String, required: true },
  image: { type: String, required: true },
  chef: { type: Schema.Types.ObjectId, ref: 'Chef', required: true },
  dishes: [{ type: ObjectId, ref: 'Dish' }],
});

export const RestaurantModel = mongoose.model('Restaurant', restaurantSchema);
export default IRestaurant;