// SERVICES :: DATABASE 
import mongoose from 'mongoose';
import { MONGO_URI } from "../config";

// EXPORTING AS DEFAULT 
export default async() => {
    try {
        await mongoose.connect(MONGO_URI, {
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
            // useCreateIndex: true
        })
        console.log(`DATABASE IS UP AND RUNNING ON PORT : 27017`)
    } catch(err) {
        console.log(`ERROR : ${err}`)
    }
}