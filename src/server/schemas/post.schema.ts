import mongoose from 'mongoose';
import type { Post } from '../../shared/models/post.model'

const postSchema = new mongoose.Schema<Post>({
    title: {type: String, required: true},
    body: {type: String, required: true},
    user: {type: mongoose.Types.ObjectId}
})

export const PostModel = mongoose.model<Post>('post', postSchema); 