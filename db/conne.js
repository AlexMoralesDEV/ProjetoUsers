const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('nodesequelize2', 'root', '.anchorCabecalhoHTML5!', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;
