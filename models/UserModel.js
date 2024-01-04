const { DataTypes } = require('sequelize');

const db = require('../db/conne');

const UserModel = db.define('User', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    occupation: {
        type: DataTypes.STRING,
        required: true
    },
    newsletter: {
        type: DataTypes.BOOLEAN
    }
})

class User {
    constructor(body) {
        this.body = body,
            this.errors = [],
            this.user = null
    }

    async cadastrar() {
        this.validar();
        console.log(this.body);
        this.user = await UserModel.create(this.body);
        return this.user;
    }

    async atualizar(id) {
        this.validar();
       
        this.body = {
            id: id,
            name: this.body.name,
            occupation: this.body.occupation,
            newsletter: this.body.newsletter
        }

        this.user = await UserModel.update(this.body, { where: { id: id } })
    }

    validar() {
        if (!this.body.newsletter) {
            this.body = {
                name: this.body.name,
                occupation: this.body.occupation,
                newsletter: false
            }
        } else {
            this.body = {
                name: this.body.name,
                occupation: this.body.occupation,
                newsletter: true
            }
        }
    }

    static async exibirUsers() {
        const users = await UserModel.findAll({ raw: true });
        return users;
    }

    static async exibirUserporId(id) {
        const user = await UserModel.findOne({ raw: true, where: { id: id } })
        return user;
    }

    static async removerUser(id) {
        await UserModel.destroy({
            where: {
                id: id
            }
        })
    }
}

module.exports = { UserModel, User };