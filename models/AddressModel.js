const { DataTypes } = require('sequelize');
const sequelize = require('../db/conne');
const { UserModel } = require('./UserModel');

const AddressModel = sequelize.define('Address', {
    rua: {
        type: DataTypes.STRING,
        required: true
    },
    numero: {
        type: DataTypes.STRING,
        required: true
    },
    cidade: {
        type: DataTypes.STRING,
        required: true
    },
})

UserModel.hasMany(AddressModel);
AddressModel.belongsTo(UserModel);

class Address{
    constructor(body){
        this.body = body;
        this.errors = [];
    }

    async cadastrar(){
        const endereco = await AddressModel.create(this.body);
        console.log('Endereço cadastrado com sucesso!');
    }

    validar(){
        this.body = {
            UserId: parseInt(this.body.UserID),
            numero: this.body.numero,
            rua: this.body.rua,
            cidade: this.body.cidade,
        }
    }

    static async remover(id){
        await AddressModel.destroy({ where: { id: id } })
    }
}

module.exports = { AddressModel, Address };
