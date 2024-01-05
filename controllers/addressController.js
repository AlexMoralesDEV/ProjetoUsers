const { Address } = require('../models/AddressModel');

exports.cadastrar = async (req, res) => {
    const address = new Address(req.body);
    await address.cadastrar()
    res.redirect('/users');
}

exports.remover = async (req, res) => {
    await Address.remover(req.params.id);
    res.redirect('back');
}