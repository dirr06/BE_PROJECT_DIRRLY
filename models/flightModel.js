import { DataTypes } from "sequelize";
import db from "../config/database.js";

const Flight = db.define('Flights', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    from: {
        type: DataTypes.STRING,
        allowNull: false
    },
    to: {
        type: DataTypes.STRING,
        allowNull: false
    },
    departure: {
        type: DataTypes.DATE,
        allowNull: false
    },
    arrival: {
        type: DataTypes.DATE,
        allowNull: false
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'flights',
});

export default Flight;

