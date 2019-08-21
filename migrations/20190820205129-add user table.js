"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("users", {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      first: {
        type: DataTypes.STRING,
        allowNull: false
      },
      last: {
        type: DataTypes.STRING,
        allowNull: false
      },

      address: {
        type: DataTypes.STRING,
        allowNull: false
      },
      address2: {
        type: DataTypes.STRING,
        allowNull: true
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false
      },

      state: {
        type: DataTypes.STRING,
        allowNull: false
      },

      zip: {
        type: DataTypes.STRING,
        allowNull: false
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false
      },
      secQuestion: {
        type: DataTypes.STRING,
        allowNull: false
      },
      secAnswer: {
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
    return queryInterface.dropTable("users");
  }
};
