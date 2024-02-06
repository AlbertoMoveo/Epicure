import { ObjectId } from "mongodb";
import { DishModel } from "../models/dish.model";

const DishHandler = {

    createDish: async (data: any) => DishModel.create(data),

    getAllDishes: async () => DishModel.find({ isActive: {$ne: false} }),

    getDishById: async (id: string) => DishModel.findById(id),

    updateDish: async (id: string, data: any) => DishModel.findByIdAndUpdate(id, data, { new: true }),

    deleteDish: async (id: string) => DishModel.findByIdAndUpdate(id, { isActive: false }, { new: true }),

};

export default DishHandler;
