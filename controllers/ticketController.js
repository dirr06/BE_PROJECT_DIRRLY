import Flight from "../models/flightModel.js";
import Airline from "../models/airlineModel.js";
import Booking from "../models/bookingModel.js";
import Ticket from "../models/ticketModel.js";

// Mendapatkan semua tiket
export const getAllTickets = async (req, res) => {
  try {
    const tickets = await Ticket.findAll({
      include: [Booking,Flight] 
    });
    res.status(200).json(tickets);
  } catch (error) {
    res.status(500).json({ message: "Error fetching tickets", error });
  }
};

// Mendapatkan tiket berdasarkan ID
export const getTicketById = async (req, res) => {
  const { id } = req.params;

  try {
    const ticket = await Ticket.findByPk(id, {
      include: [Booking,Flight] 
    });

    if (!ticket) {
      return res.status(404).json({ message: "Ticket not found" });
    }

    res.status(200).json(ticket);
  } catch (error) {
    res.status(500).json({ message: "Error fetching ticket", error });
  }
};

// Membuat tiket baru
export const createTicket = async (req, res) => {
  try {
    const newTicket = await Ticket.create(req.body);
    res.status(201).json(newTicket);
  } catch (error) {
    res.status(500).json({ message: "Error creating ticket", error });
  }
};

// Memperbarui tiket
export const updateTicket = async (req, res) => {
  const { id } = req.params;

  try {
    const ticket = await Ticket.findByPk(id);
    if (ticket) {
      await ticket.update(req.body);
      res.status(200).json(ticket);
    } else {
      res.status(404).json({ message: "Ticket not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error updating ticket", error });
  }
};

// Menghapus tiket
export const deleteTicket = async (req, res) => {
  const { id } = req.params;

  try {
    const ticket = await Ticket.findByPk(id);
    if (ticket) {
      await ticket.destroy();
      res.status(200).json({ message: "Ticket deleted successfully" });
    } else {
      res.status(404).json({ message: "Ticket not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error deleting ticket", error });
  }
};