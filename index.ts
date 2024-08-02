// IMPORTING THE REQURIED MODULES IN THE WORK DIRECTORY 
import express from "express";
import bodyParser from "body-parser";
import { MONGO_URI } from "./config";
import mongoose from "mongoose";

// IMPORTING ROUTES 
import { AdminRoute, VandorRoute } from "./routes";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended: true} ));

// ROUTING 
app.use('/admin', AdminRoute);
app.use('/vandor', VandorRoute);

// DATABASE CONNECTION 
mongoose.connect(MONGO_URI, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    // useCreateIndex: true
}).then(result => {
    // console.log(result)
    console.log("CONNECTION IS READY!")
}).catch(err => console.log(err))


// PORT FETCHING 
app.listen(8000, () => {
    console.clear();
    console.log("THE APPLICATION IS ACTIVE AT POST :8000");
});