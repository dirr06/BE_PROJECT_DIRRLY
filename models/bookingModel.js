import { DataTypes } from "sequelize";
import db from "../config/database.js";

const Booking = db.define('Bookings', { 
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name:{
      type:DataTypes.STRING,
      allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false
    },
    seat: {
        type: DataTypes.STRING,
        allowNull: false
    }
},
    {
        tableName: 'bookings',
    }
);

export default Booking;