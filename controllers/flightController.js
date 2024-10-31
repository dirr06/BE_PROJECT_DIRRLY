import Flight from '../models/flightModel.js';
import Airline from '../models/airlineModel.js';
import Ticket from '../models/ticketModel.js';

// Mendapatkan semua penerbangan
export const getAllFlights = async (req, res) => {
    try {
        const flights = await Flight.findAll({
            include: [Airline]
        });
        res.status(200).json(flights);
    } catch (error) {
        res.status(500).json({ message: "Error fetching flights", error });
    }
};

// Mendapatkan penerbangan berdasarkan ID
export const getFlightById = async (req, res) => {
    try {
        const flight = await Flight.findByPk(req.params.id, {
            include: [Airline, Ticket]
        });
        if (flight) {
            res.status(200).json(flight);
        } else {
            res.status(404).json({ message: "Flight not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error fetching flight", error });
    }
};

// Membuat penerbangan baru
export const createFlight = async (req, res) => {
    try {
        const newFlight = await Flight.create(req.body);
        res.status(201).json(newFlight);
    } catch (error) {
        res.status(500).json({ message: "Error creating flight", error });
    }
};

// Memperbarui penerbangan
export const updateFlight = async (req, res) => {
    try {
        const flight = await Flight.findByPk(req.params.id);
        if (flight) {
            await flight.update(req.body);
            res.status(200).json(flight);
        } else {
            res.status(404).json({ message: "Flight not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error updating flight", error });
    }
};

// Menghapus penerbangan
export const deleteFlight = async (req, res) => {
    try {
        const flight = await Flight.findByPk(req.params.id);
        if (flight) {
            await flight.destroy();
            res.status(200).json({ message: "Flight deleted successfully" });
        } else {
            res.status(404).json({ message: "Flight not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error deleting flight", error });
    }
};