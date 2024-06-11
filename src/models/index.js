const sequelize = require('../config/database');

const User = require('./user');  // Exemplo de modelo

// Inicialize todos os modelos aqui
const models = { User };

Object.values(models).forEach(model => {
    if (model.associate) {
        model.associate(models);
    }
});

module.exports = { sequelize, models };
