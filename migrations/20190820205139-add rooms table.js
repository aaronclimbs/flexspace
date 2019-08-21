"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("rooms", {
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
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("rooms");
  }
};
