module.exports = function(sequelize, DataTypes) {
    var Reservation = sequelize.define("Reservation", {
        roomID: {
            type: DataTypes.STRING,
            allowNull: false
        },
        text: {
            type: DataTypes.STRING,
            allowNull: false
        },
        start_date: {
            type: DataTypes.DATE,
            allowNull: false
        },
        end_date: {
            type: DataTypes.DATE,
            allowNull: false
        }
    });


    Reservation.associate = function(models) {
        Reservation.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };







    return Reservation;
};