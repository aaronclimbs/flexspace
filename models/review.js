module.exports = function(sequelize, DataTypes) {
    var Review = sequelize.define("Review", {
        // roomID: {
        //     type: DataTypes.STRING,
        //     allowNull: false
        // },
        message: {
            type: DataTypes.STRING,
            allowNull: false
        },
        rating: {
            type: DataTypes.INTEGER,
            allowNull: false
        }  
    });


    // Review.associate = function(models) {

    //     Reviews.belongsTo(models.Review, {
    //         foreignKey: {
    //             allowNull: false,
                
    //         }, 
    //     });
    //     Reviews.belongsTo(models.User, {
    //         foreignKey: {
    //             allowNull: false
    //         }
    //     });
    // };

    return Review;



};