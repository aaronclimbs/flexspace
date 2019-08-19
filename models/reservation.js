module.exports = function(sequelize, DataTypes) {
    var Reservation = sequelize.define("Reservation", {
        roomID: {
            type: DataTypes.STRING,
            allowNull: false
        },
        renterID: {
            type: DataTypes.STRING,
            allowNull: false
        },
        startDate: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        endDate: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });
    return Reservation;
};