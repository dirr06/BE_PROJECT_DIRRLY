import { DataTypes } from "sequelize";
import db from "../config/database.js";

const Ticket = db.define('Tickets', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    booking_uid: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'tickets',
});

export default Ticket;

