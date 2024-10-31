import express from 'express';
import { getAllTickets, getTicketById, createTicket, updateTicket } from '../controllers/ticketController.js';

const routerTicket = express.Router();

routerTicket.get('/tickets', getAllTickets);
routerTicket.get('/tickets/:id', getTicketById);
routerTicket.post('/tickets', createTicket);
routerTicket.put('/tickets/:id', updateTicket);

export default routerTicket;
