import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import db from "./config/database.js";
import bodyParser from "body-parser";
import './models/index.js'
import router from './routes/Routes.js'
dotenv.config();

// await db.sync({force: true})
// .then(() => {
//     console.log("Smua Model Sudah Tersinkronasi")
// })
// .catch((error) => {
//     console.error("Unable to synchronize the models:", error);
// });
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))
app.use(router) 




app.listen(5000, () => console.log('Server running at http://localhost:5000'));
