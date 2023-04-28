"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Todos", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      activity_group_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Activities",
          key: "id",
        },
        onDelete: "cascade",
        onUpdate: "cascade",
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      priority: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      is_active: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("todos");
  },
};
