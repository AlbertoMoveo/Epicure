import { RestaurantModel } from "../models/restaurant.model";

const RestaurantHandler = {

    createRestaurant: async (data: any) => RestaurantModel.create(data),

    getAllRestaurants: async () => RestaurantModel.find({ isActive: {$ne: false} }).populate('dishes'),

    getRestaurantById: async (id: string) => RestaurantModel.findById(id).populate('dishes'),

    updateRestaurant: async (id: string, data: any) => RestaurantModel.findByIdAndUpdate(id, data, { new: true }),

    deleteRestaurant: async (id: string) => RestaurantModel.findByIdAndUpdate(id, { isActive: false }, { new: true }),
    
};

export default RestaurantHandler;
