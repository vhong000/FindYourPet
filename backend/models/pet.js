'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pet = sequelize.define('pet', {
		species: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				notEmpty: true,
			},
		},
		breed: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				notEmpty: true,
			},
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				notEmpty: true,
			},
		},
		dob: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				notEmpty: true,
			},
		},
		description: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		gender: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				notEmpty: true,
			},
		}
  }, {});

	Pet.associate = function(models) {
		Pet.belongsTo(models.User);
		Pet.belongsToMany(models.User, { as: 'Followers', through: 'liked_pets' });
		Pet.belongsToMany(models.User, { as: 'Interested', through: 'interested_pets' });
	};

  return Pet;
};
