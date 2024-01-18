import { RestaurantModel } from '../models/restaurant.model';
import { ChefModel } from '../models/chef.model';
import { DishModel } from '../models/dish.model';

const SearchHandler = {
    search: async (query: string) => {
        try {
            const [restaurantMatches, chefMatches, dishMatches] = await Promise.all([
                RestaurantModel.find({ name: { $regex: new RegExp(query, 'i') }, isActive: true }),
                ChefModel.find({ name: { $regex: new RegExp(query, 'i') }, isActive: true }),
                DishModel.find({ name: { $regex: new RegExp(query, 'i') }, isActive: true }),
            ]);
            return {
                restaurants: restaurantMatches,
                chefs: chefMatches,
                dishes: dishMatches,
            };
        } catch (error) {
            console.error('Error in SearchHandler:', error);
            throw error;
        }
    },
};

export default SearchHandler;