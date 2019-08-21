"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface
      .addColumn("Rooms", "UserId", {
        type: Sequelize.STRING,
        references: {
          model: "Users",
          key: "id"
        },
        onUpdate: "CASCADE",
        // apparently the dfault is SET NULL for delete for belongsTo, hasOne, and hasMany
        onDelete: "SET NULL"
      })
      .then(() => {
        return queryInterface.addColumn("Reservations", "UserId", {
          type: Sequelize.STRING,
          references: {
            model: "Users",
            key: "id"
          },
          onUpdate: "CASCADE",
          // apparently the dfault is SET NULL for delete for belongsTo, hasOne, and hasMany
          onDelete: "SET NULL"
        });
      })
      .then(() => {
        return queryInterface.addColumn("Reservations", "RoomId", {
          type: Sequelize.STRING,
          references: {
            model: "Rooms",
            key: "id"
          },
          onUpdate: "CASCADE",
          // apparently the dfault is SET NULL for delete for belongsTo, hasOne, and hasMany
          onDelete: "SET NULL"
        });
      });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface
      .removeColumn("Rooms", "UserId")
      .then(() => {
        return queryInterface.removeColumn("Reservations", "UserId");
      })
      .then(() => {
        return queryInterface.removeColumn("Reservations", "RoomId");
      });
  }
};
