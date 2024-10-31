import { DataTypes } from "sequelize";
import db from "../config/database.js";

const Airline = db.define('Airlines', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    country: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
  tableName: 'airlines',
});

export default Airline;



