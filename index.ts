// IMPORTING THE REQURIED MODULES IN THE WORK DIRECTORY 
import express from "express";
import bodyParser from "body-parser";

// IMPORTING ROUTES 
import { AdminRoute, VandorRoute } from "./routes";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended: true} ));

// ROUTING 
app.use('/admin', AdminRoute);
app.use('/vandor', VandorRoute);


// PORT FETCHING 
app.listen(8000, () => {
    console.clear();
    console.log("THE APPLICATION IS ACTIVE AT POST :8000");
});