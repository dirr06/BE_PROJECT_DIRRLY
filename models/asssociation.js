import User from './userModel.js';
import Booking from './bookingModel.js';
import Ticket from './ticketModel.js';
import Flight from './flightModel.js';
import Airline from './airlineModel.js';

// Mendefinisikan relasi one-to-many antara User dan Booking. Satu user dapat memiliki banyak booking.
User.hasMany(Booking, { foreignKey: 'userId' });
// Mendefinisikan relasi many-to-one antara Booking dan User. Satu booking hanya milik satu user.
Booking.belongsTo(User, { foreignKey: 'userId' });

// Mendefinisikan relasi one-to-many antara Booking dan Ticket. Satu booking dapat memiliki banyak ticket.
Booking.hasMany(Ticket, { foreignKey: 'bookingId2' });
// Mendefinisikan relasi many-to-one antara Ticket dan Booking. Satu ticket hanya milik satu booking.
Ticket.belongsTo(Booking, { foreignKey: 'bookingId2' });

// Mendefinisikan relasi one-to-many antara Flight dan Ticket. Satu penerbangan dapat memiliki banyak tiket.
Flight.hasMany(Ticket, { foreignKey: 'flightId' });
// Mendefinisikan relasi many-to-one antara Ticket dan Flight. Satu tiket hanya milik satu penerbangan.
Ticket.belongsTo(Flight, { foreignKey: 'flightId' });

// Mendefinisikan relasi one-to-many antara Airline dan Flight. Satu maskapai dapat memiliki banyak penerbangan.
Airline.hasMany(Flight, { foreignKey: 'airlineId' });
// Mendefinisikan relasi many-to-one antara Flight dan Airline. Satu penerbangan hanya milik satu maskapai.
Flight.belongsTo(Airline, { foreignKey: 'airlineId' });

