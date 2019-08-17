module.exports = function(sequelize, DataTypes) {
    var Room = sequelize.define("Room", {
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
};