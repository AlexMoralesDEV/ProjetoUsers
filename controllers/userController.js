const { User } = require('../models/UserModel');

exports.cadastrar = async (req, res) => {
    const user = new User(req.body);
    await user.cadastrar();
    res.redirect('/users')
};

exports.exibirUsers = async (req, res) => {
    const users = await User.exibirUsers();
    res.render('exibir', { users });
};

exports.userInfo = async (req, res) => {
    const user = await User.exibirUserporId(req.params.id);
    res.render('mostrarUser', { user });
};

exports.apagarUser = async (req, res) => {
    const user = await User.removerUser(req.params.id);
    res.redirect('back');
};

exports.atualizarDados = async (req, res) => {
    try {
        const user = await User.exibirUserporId(req.params.id);
        console.log(user);
        res.render('editar', { user: user.get({ plain: true }) });
    }catch(err){
        console.log(err)
    }
};

exports.update = async (req, res) => {
    const user = new User(req.body)
    await user.atualizar(req.params.id);
    res.redirect('/users');
};