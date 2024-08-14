// IMPORTING THE REQURIED MODULES IN THE WORK DIRECTORY 
import express from "express";
import bodyParser from "body-parser";
import { MONGO_URI } from "./config";
import mongoose from "mongoose";
import path from 'path';

// IMPORTING ROUTES 
import { AdminRoute } from "./routes/Admin/AdminRoute";
import { VandorRoute } from "./routes/Vandor/VandorRoute";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended: true} ));
app.use('/images', express.static(path.join(__dirname, 'images')));

// ROUTING 
app.use('/admin', AdminRoute);
app.use('/vandor', VandorRoute);

// DATABASE CONNECTION 
mongoose.connect(MONGO_URI, {
}).then(result => {
    console.log("CONNECTION IS READY!")
}).catch(err => console.log(err))


// PORT FETCHING 
app.listen(8000, () => {
    console.clear();
    console.log("THE APPLICATION IS ACTIVE AT POST :8000");
});