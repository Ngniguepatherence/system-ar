const Client = require('../model/client');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const ClientController = {
    authClient: async (req, res) => {
        const { email, password } = req.body;
        const client = await Client.findOne({ email });
        if (!client) {
            return res.status(404).json({ message: 'Cliente não encontrado' });
        }
        if (client.password !== password) {
            return res.status(401).json({ message: 'Senha incorreta' });
        }

        const token = jwt.sign({user: client}, process.env.JWT_SECRET);
        res.status(200).json({token});
    },
    AddClient: async (req, res) => {
        const { name, email, password, service, phone,  } = req.body;
        const client = new Client({ name, email, password,service, phone });
        await client.save();
        res.status(201).json({ message: 'Cliente adicionado com sucesso' });
    },
    ChangePassword: async (req, res) => {
        const { email, password } = req.body;
        const client = await Client.findOne({ email });
        if (!client) {
            return res.status(404).json({ message: 'Cliente não encontrado' });
        }
        client.password = password;
        await client.save();
        res.status(200).json({ message: 'Senha alterada com sucesso' });
    },
    updateUser: async (req, res) => {
        const { name, email, service, phone } = req.body;
        const client = await Client.findOne({ email });
        if (!client) {
            return res.status(404).json({ message: 'Cliente não encontrado' });
        }
        client.name = name;
        client.service = service;
        client.phone = phone;
        await client.save();
        res.status(200).json({ message: 'Cliente atualizado com sucesso' });
    }
}

module.exports = ClientController;