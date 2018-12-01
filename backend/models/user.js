
const bcrypt = require('bcrypt-nodejs');

'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    zipcode: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true,
        isEmail: true,
      },
    },
    password_hash: {
      type: DataTypes.STRING,
    },
  });

	User.beforeCreate((user) =>
			new sequelize.Promise((resolve) => {
				bcrypt.hash(user.password_hash, null, null, (err, hashedPassword) => {
					resolve(hashedPassword);
				});
			}).then((hashedPw) => {
				user.password_hash = hashedPw;
			})
		);

	User.associate = function(models) {
    User.belongsToMany(models.Pet, { as: 'LikedPets', through: 'liked_pets' })

		User.hasMany(models.Pet);
	};

  return User;
};
