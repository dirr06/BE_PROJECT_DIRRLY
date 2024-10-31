import express from 'express';
import { getAllBookings, getBookingById, createBooking, updateBooking, deleteBooking, createAirLine } from '../controllers/bookingController.js';

const routerBooking = express.Router();

routerBooking.get('/bookings', getAllBookings);
routerBooking.get('/bookings/:id', getBookingById);
routerBooking.post('/bookings', createBooking);
routerBooking.put('/bookings/:id', updateBooking);
routerBooking.delete('/bookings/:id', deleteBooking);
routerBooking.post('/airlines', createAirLine);

export default routerBooking;

