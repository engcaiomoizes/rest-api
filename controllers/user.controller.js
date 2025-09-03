var User = require('../models/user.model');

exports.all = async function (req, res) {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Falha ao carregar usuários." });
    }
};

exports.get = async function (req, res) {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Cliente não encontrado!" });
    }
};

exports.create = async function (req, res) {
    try {
        const newUser = new User(req.body);
        await newUser.save().then((user) => {
            res.status(200).json({ message: "Usuário cadastrado com sucesso!", user });
        }).catch((err) => {
            console.err(err);
            res.status(500).json({ message: "Falha ao cadastrar usuário." });
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Falha ao cadastrar usuário." });
    }
};

exports.update = async function (req, res) {
    try {
        const id = req.params.id;
        const updatedUser = req.body;
        await User.findOneAndUpdate({ _id: id }, updatedUser, { new: true }).then((userUpdated) => {
            res.status(200).json({ message: "Usuário atualizado com sucesso!", user: userUpdated });
        }).catch((err) => {
            console.error(err);
            res.status(500).json({ message: "Falha ao atualizar usuário." });
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Falha ao atualizar usuário." });
    }
};

exports.delete = async function (req, res) {
    try {
        const id = req.params.id;
        await User.findByIdAndDelete(id).then((deletedUser) => {
            res.status(200).json({ message: "Usuário deletado com sucesso!", deletedUser });
        }).catch((err) => {
            console.error(err);
            res.status(500).json({ message: "Falha ao deletar usuário." });
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Falha ao deletar usuário." });
    }
};