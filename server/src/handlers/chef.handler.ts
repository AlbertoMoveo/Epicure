import { ChefModel } from "../models/chef.model";

const ChefHandler = {

    createChef: async (data: any) => ChefModel.create(data),

    getAllChefs: async () => ChefModel.find({ isActive: {$ne: false} }),

    getChefById: async (id: string) => ChefModel.findById(id),

    updateChef: async (id: string, data: any) => ChefModel.findByIdAndUpdate(id, data, { new: true }),

    deleteChef: async (id: string) => ChefModel.findByIdAndUpdate(id, { isActive: false }, { new: true }),

};

export default ChefHandler;
