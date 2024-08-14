// MODELS :: FOOD 
import mongoose, { Schema, Document } from 'mongoose';

// INTERFACE FOR THE FOOD DATA
interface FoodDoc extends Document {
    vandorId: string;
    name: string;
    description: string;
    category: string;
    foodType: [string];
    readyTime: number;
    price: number;
    rating: number;
    images: [string];
}

// SCHEMA DEFINITION 
const FoodSchema = new Schema({
    vandorId: { type: String },
    name: { type: String, required: true },
    description: { type: String, required:true },
    category: { type: String },
    foodType: { type: String, required: true },
    readyTime: { type: Number },
    price: { type: Number, requried: true },
    rating: { type: Number, required: true },
    images: { type: [String]}
}, {
    toJSON: {
        transform(doc,ret) {
            delete ret.__v,
            delete ret.createdAt,
            delete ret.updatedAt
        }
    },
    timestamps: true
})

const Food = mongoose.model<FoodDoc>('food', FoodSchema);

// EXPORTING 
export { Food };
