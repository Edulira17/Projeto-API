const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: { msg: 'Name is required' },
            notEmpty: { msg: 'Name should not be empty' }
        }
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
            args: true,
            msg: 'Email address already in use'
        },
        validate: {
            isEmail: { msg: 'Email is invalid' },
            notNull: { msg: 'Email is required' },
            notEmpty: { msg: 'Email should not be empty' },
        }
    }
}, {

//Valida antes de criar um novo registro de usuário no banco de dados para garantir que o endereço de email não esteja já em uso:
    hooks: {
        beforeCreate: async (user, options) => {
            if (user._options.isNewRecord) {
                const inUseEmails = (await User.findAll()).map(user => user.email)
                if (inUseEmails.includes(user.email)) {
                    throw new Error('Email address already in use');
                }
            }
        }
    }
});

module.exports = User;
