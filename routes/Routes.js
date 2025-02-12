import express from 'express';
import { getAllFlights, getFlightById, createFlight, updateFlight } from '../controllers/flightController.js';
import { getAllTickets, getTicketById, createTicket, updateTicket } from '../controllers/ticketController.js';
import { getAllBookings, getBookingById, createBooking, updateBooking, deleteBooking, createAirLine } from '../controllers/bookingController.js';
import { register, login } from '../controllers/authController.js';
import { verifyToken } from '../middleware/authMiddleWare.js'
import cors from 'cors';

const router = express.Router()

//Flight Routes
router.get('/flights', getAllFlights);
router.get('/flights/:id', getFlightById);
router.post('/flights', createFlight);
router.put('/flights/:id', updateFlight);

//Ticket Routes
router.get('/tickets', getAllTickets);
router.get('/tickets/:id', getTicketById);
router.post('/tickets', createTicket);
router.put('/tickets/:id', updateTicket);

//Booking Routes
router.get('/bookings',  getAllBookings);
router.get('/bookings/:id',  getBookingById);
router.post('/bookings',  createBooking);
router.put('/bookings/:id',  updateBooking);
router.delete('/bookings/:id',  deleteBooking);
router.post('/airlines',  createAirLine);

//Auth Routes
router.post('/register', register);
router.post('/login', login);

const app = express();
app.use(cors({
  origin: 'http://localhost:3000', // Ganti dengan URL frontend Anda
  credentials: true
}));

export default router