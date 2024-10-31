import express from 'express';
import { getAllFlights, getFlightById, createFlight, updateFlight } from '../controllers/flightController.js';

const routerFlight = express.Router();

routerFlight.get('/flights', getAllFlights);
routerFlight.get('/flights/:id', getFlightById);
routerFlight.post('/flights', createFlight);
routerFlight.put('/flights/:id', updateFlight);

export default routerFlight;
