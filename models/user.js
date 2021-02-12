'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    // static associate(models) {
    //   // define association here
    // }
  };
  User.init({
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: '"firstName" is required',
        },
        notEmpty: {
          msg: 'Please provide a first name',
        },
      },
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: '"lastName" is required',
        },
        notEmpty: {
          msg: 'Please provide a last name',
        },
      },
    },
    emailAddress: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        notNull: {
          msg: '"emailAddress" is required',
        },
        notEmpty: {
          msg: 'Please provide an email',
        },
        isEmail: {
          msg: 'Please provide a valid email "email@example.com"',
        },
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: '"password" is required',
        },
        notEmpty: {
          msg: 'Please provide a password',
        },
      },
    },
  }, {
    sequelize,
    modelName: 'User',
  });

  User.associate = (models) => {
    User.hasMany(models.Course, {
      foreignKey: {
        fieldName: "userId",
      },
    });
  }

  return User;
};