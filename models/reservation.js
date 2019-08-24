module.exports = function(sequelize, DataTypes) {
    var Reservation = sequelize.define("Reservation", {
        // roomID: {
        //     type: DataTypes.STRING,
        //     allowNull: false
        // },
        text: {
            type: DataTypes.STRING,
            allowNull: false
        },
        start_date: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        start_time: {
            type:DataTypes.TIME,
            allowNull: false
        },
        end_date: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        duration: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    });


    Reservation.associate = function(models) {

        Reservation.belongsTo(models.Room, {
            foreignKey: {
                allowNull: false,
                
            }, 
        });
        Reservation.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };







    return Reservation;
};