"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Todos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Todos.belongsTo(models.Activities, {
        foreignKey: "activity_group_id",
      });
    }
  }
  Todos.init(
    {
      activity_group_id: DataTypes.INTEGER,
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Title Required",
          },
          notEmpty: {
            msg: "Title Required",
          },
        },
      },
      priority: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Priority Required",
          },
          notEmpty: {
            msg: "Priority Required",
          },
        },
      },
      is_active: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Is_active Required",
          },
          notEmpty: {
            msg: "Is_active Required",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Todos",
    }
  );
  return Todos;
};
