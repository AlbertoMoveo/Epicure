import { UserModel } from "../models/user.model";

const userHandler = {

    createUser: async (data: any) => {
        const encryptedPassword = Buffer.from(data.password).toString('base64');
        return UserModel.create({ ...data, password: encryptedPassword });
    },

    getAllUseres: async () => UserModel.find({ isActive: {$ne: false} }),

    getUserById: async (id: string) => UserModel.findById(id),

    getUserByEmail: async (email: string) => UserModel.findOne({ email: email }),

    checkPassword: async (email: string, password: string) => UserModel.findOne({ email: email }),

    updateUser: async (id: string, data: any) => UserModel.findByIdAndUpdate(id, data, { new: true }),

    deleteUser: async (id: string) => UserModel.findByIdAndUpdate(id, { isActive: false }, { new: true }),

};

export default userHandler;
