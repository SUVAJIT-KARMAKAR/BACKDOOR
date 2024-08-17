// INDEX 
 import express from 'express';
 import App from "./services/Backdoor";
 import dbConnection from "./services/Database";


//  SERVER PORT INITIATION
const StartServer = async() => {
    const app = express();
    await dbConnection();
    await App(app);

    app.listen(8000, ()=> {
        console.log("THE SERVIER IS UP AND RUNNING ON PORT : 8000")
    })
}

StartServer();