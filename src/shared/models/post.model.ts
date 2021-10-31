import type mongoose from 'mongoose';
import type { User } from './user.model';
export interface Post {
    title: string;
    body: string;
    user: {type: mongoose.Types.ObjectId} | User;
}