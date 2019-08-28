module.exports = function(sequelize, DataTypes) {
    var Room = sequelize.define("Room", {
        roomName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        roomCapacity: {
            type: DataTypes.STRING,
            allowNull: false
        },
        roomURL: {
            type: DataTypes.STRING,
            allowNull: false
        },
        roomType: {
            type: DataTypes.STRING,
            allowNull: false
        },
        address1: {
            type: DataTypes.STRING,
            allowNull: true
        },
        address2: {
            type: DataTypes.STRING,
            allowNull: true
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false
        },
        state_us: {
            type: DataTypes.STRING,
            allowNull: false
        },
        zip: {
            type: DataTypes.STRING,
            allowNull: false
        },
        contactPhone: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // ownerID: {
        //     type: DataTypes.STRING,
        //     allowNull: false
        // },
        hourlyRate: {
            type: DataTypes.STRING,
            allowNull: false
        }

        
    });


    Room.associate = function(models) {
        Room.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
        Room.hasMany(models.Reservation, {
            onDelete: "cascade",
            hooks: true
        });
        Room.hasMany(models.Review, {
            onDelete: "cascade",
            hooks: true
        });
    };


    return Room;
};