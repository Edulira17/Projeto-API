const { models } = require('../models/index.js');
const  { User } = models;
const sequelize = require('../config/database');  // Importar sequelize para utilizar transações

const createUser = async (req, res) => {
    const transaction = await sequelize.transaction();
    try {
        const user = await User.create(req.body);
        await transaction.commit();  // Comitar a transação se tudo der certo
        res.status(201).json(user);
    } catch (error) {
        await transaction.rollback();  // Reverter a transação em caso de erro
        res.status(400).json({ error: error.message });
    }
};

const getUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const updateUser = async (req, res) => {
    const transaction = await sequelize.transaction();
    try {
        const { id } = req.params;
        const [updated] = await User.update(req.body, {
            where: { id: id }
        });
        if (updated) {
            const updatedUser = await User.findOne({ where: { id: id } });
            await transaction.commit();
            res.status(200).json(updatedUser);
        } else {
            await transaction.rollback();
            res.status(404).json({ error: 'User not found' });
        }
    } catch (error) {
        await transaction.rollback();
        res.status(400).json({ error: error.message });
    }
};

const deleteUser = async (req, res) => {
    const transaction = await sequelize.transaction();
    try {
        const { id } = req.params;
        const deleted = await User.destroy({
            where: { id: id }
        });
        if (deleted) {
            await transaction.commit();
            res.status(204).send();
        } else {
            await transaction.rollback();
            res.status(404).json({ error: 'User not found' });
        }
    } catch (error) {
        await transaction.rollback();
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    createUser,
    getUsers,
    updateUser,
    deleteUser
};
