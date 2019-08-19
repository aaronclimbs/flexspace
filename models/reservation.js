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

//adding associations here:

    Reservation.associate = function(models) {
        Reservation.belongsTo(models.Room, {
            foreignKey: {
                allowNull: false
            }
        });
    };


    return Reservation;
};