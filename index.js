import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import db from "./config/database.js";
import bodyParser from "body-parser";
import './models/index.js'
import routerAuth from "./routes/authRoute.js";
import routerBooking from "./routes/bookingRoute.js";
import routerFlight from "./routes/flightRoute.js";
import routerTicket from "./routes/ticketRoute.js";

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
app.use( routerAuth);
app.use( routerBooking);
app.use( routerFlight);
app.use( routerTicket);




app.listen(5000, () => console.log('Server running at http://localhost:5000'));
