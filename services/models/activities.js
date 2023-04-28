"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Activities extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Activities.hasMany(models.Todos, {
        foreignKey: "activity_group_id",
      });
    }
  }
  Activities.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "title cannot be null",
          },
          notEmpty: {
            msg: "title cannot be null",
          },
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
          arg: true,
          msg: "Email Already Used",
        },
        validate: {
          notEmpty: {
            msg: "email cannot be null",
          },
          notNull: {
            msg: "email cannot be null",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Activities",
    }
  );
  return Activities;
};
