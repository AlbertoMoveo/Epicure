import { RestaurantModel } from '../models/restaurant.model';
import { ChefModel } from '../models/chef.model';
import { DishModel } from '../models/dish.model';

const SearchHandler = {
    search: async (query: string) => {
        const restaurantMatches = await RestaurantModel.find({ name: { $regex: new RegExp(query, 'i') }, isActive: true });
        const chefMatches = await ChefModel.find({ name: { $regex: new RegExp(query, 'i') }, isActive: true });
        const dishMatches = await DishModel.find({ name: { $regex: new RegExp(query, 'i') }, isActive: true });

        return {
            restaurants: restaurantMatches,
            chefs: chefMatches,
            dishes: dishMatches,
        };
    },
};

export default SearchHandler;
