import mongoose, { Schema } from 'mongoose';

interface IUser {
        name: string,
        surname: string,
        email: string,
        password: string,
        admin: boolean
};

const userSchema = new mongoose.Schema<IUser>({
    name: { type: String, required: true },
    surname: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    admin: { type: Boolean, default: false }
});

export const UserModel = mongoose.model('User', userSchema);
export default IUser;