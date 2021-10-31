import * as mongoose from 'mongoose';
export interface User {
    _id?:{type: mongoose.Types.ObjectId}
    name: string,
    username: string,
    email: string,
    password?: string,
}