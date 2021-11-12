import * as mongoose from 'mongoose';

export interface Product {
    _id?:{type: mongoose.Types.ObjectId}
    title: string,
    price: number,
    description: string,
    imageurl: string,
    quantity: number,
    total:number,
   
}