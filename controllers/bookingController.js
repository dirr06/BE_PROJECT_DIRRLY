import Booking from '../models/bookingModel.js';
import User from '../models/userModel.js';
import Ticket from '../models/ticketModel.js';
import Flight from '../models/flightModel.js';
import Airline from '../models/airlineModel.js';
// Mendapatkan semua booking
export const getAllBookings = async (req, res) => {
    try {
        const bookings = await Booking.findAll({
            include: [User]
    });
        res.status(200).json(bookings);
    } catch (error) {
        res.status(500).json({ message: "Error fetching bookings", error });
    }
};

// Mendapatkan booking berdasarkan ID
export const getBookingById = async (req, res) => {
    try {
        const booking = await Booking.findByPk(req.params.id, {
            include: [User]
        });
        if (booking) {
            res.status(200).json(booking);
        } else {
            res.status(404).json({ message: "Booking not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error fetching booking", error });
    }
};

// Membuat booking baru
export const createBooking = async (req, res) => {
    const {name, email, seat} = req.body;
    const bookingUID = generateUID();

    try {
        // Membuat booking baru terlebih dahulu
        const newBooking = await Booking.create({
            name: name,
            email: email,
            seat: seat,
        });

        // Menggunakan ID dari booking yang baru dibuat
        const bookingId2 = newBooking.id;

        // Mencari atau membuat tiket dengan bookingUID dan bookingId2
        let ticket = await Ticket.findOne({ where: { booking_uid: bookingUID } });

        if (!ticket) {
            ticket = await Ticket.create({
                booking_uid: bookingUID,
                bookingId2: bookingId2
            });
        }

        res.status(201).json({ newBooking, ticket });
    } catch (error) {
        res.status(500).json({ message: "Error creating booking", error: error.message });
    }
};

export const createAirLine = async(req,res) => {
    const {name,country} = req.body
    try{
        const newAirLine = await Airline.create({
            name,
            country
        })
        res.status(200).json({newAirLine})
    } catch(err){
        res.status(500).json({error:err.message, message:"Error creating New Airline"})
    }
}
// Memperbarui booking
export const updateBooking = async (req, res) => {
    try {
        const booking = await Booking.findByPk(req.params.id);
        if (booking) {
            await booking.update(req.body);
            res.status(200).json(booking);
        } else {
            res.status(404).json({ message: "Booking not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error updating booking", error });
    }
};

// Menghapus booking
export const deleteBooking = async (req, res) => {
    try {
        const booking = await Booking.findByPk(req.params.id);
        if (booking) {
            await booking.destroy();
            res.status(200).json({ message: "Booking deleted successfully" });
        } else {
            res.status(404).json({ message: "Booking not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error deleting booking", error });
    }
};

const generateUID = () => {
        const chars =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let uid = "";
        for (let i = 0; i < 10; i++) {
          uid += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return uid;
}

//LANJUT TESTING API