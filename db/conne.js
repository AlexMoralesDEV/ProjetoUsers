const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('nodesequelize', 'root', '.anchorCabecalhoHTML5!', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;
