// // INDEX 
//  import express from 'express';
//  import App from "./services/Backdoor";
//  import dbConnection from "./services/Database";


// //  SERVER PORT INITIATION
// const StartServer = async() => {
//     const app = express();
//     await dbConnection();
//     await App(app);

//     app.listen(8000, ()=> {
//         console.log("THE SERVIER IS UP AND RUNNING ON PORT : 8000")
//     })
// }

// StartServer();




// CLAUDE :: AI 
import express from 'express';
import dbConnection from "./services/Database";
import setupApp from "./services/Backdoor";

const StartServer = async () => {
    await dbConnection();

    const adminApp = express();
    const vandorApp = express();
    const shoppingApp = express();

    await setupApp(adminApp, 'admin');
    await setupApp(vandorApp, 'vandor');
    await setupApp(shoppingApp, 'shopping');

    adminApp.listen(8001, () => {
        console.log("ADMIN SERVER IS UP AND RUNNING ON PORT: 8001");
    });

    vandorApp.listen(8002, () => {
        console.log("VANDOR SERVER IS UP AND RUNNING ON PORT: 8002");
    });

    shoppingApp.listen(8003, () => {
        console.log("SHOPPING SERVER IS UP AND RUNNING ON PORT: 8003");
    });
}

StartServer();