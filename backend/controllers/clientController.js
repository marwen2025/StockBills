const User = require('../models/userModel');
const Client = require('../models/clientModel');
const asynchandler = require('express-async-handler');

// Add client
const addClient = asynchandler(async (req, res) => {
    const { name,firstname,matricule, email, phoneNumber } = req.body;
    // Validate client
    if (!name || !matricule || !firstname || !email || !phoneNumber) {
        res.status(400);
        throw new Error('Please fill all required fields');
    }
    // Get user ID
    const user = await User.findById(req.user._id);
    // Check if client exists
    const clientExist = await Client.findOne({ matricule: matricule,userId:user._id });
    if (clientExist) {
        res.status(400);
        throw new Error('Client already exists');
    }
    
    // Create new client 
    const client = await Client.create({ userId: user._id,matricule, name,firstname, email, phoneNumber });
    res.status(201).json(client);
});

// Get all clients
const getClients = asynchandler(async (req, res) => {
    const clients = await Client.find({ userId: req.user._id });
    res.status(200).json(clients);
});

// Get single client
const getClientBymatricule = asynchandler(async (req, res) => {
    const client = await Client.findOne({ _id: req.params.matricule, userId: req.user._id });
    if (client) {
        res.status(200).json(client);
    } else {
        res.status(404);
        throw new Error('Client not found');
    }
});

// Update client
const updateClient = asynchandler(async (req, res) => {
    const client = await Client.findOne({ _id: req.params.id, userId: req.user._id });
    if (client) {
        const { name,firstname, email, phoneNumber } = client;

        client.name = req.body.name || name;
        client.firstname = req.body.firstname || firstname;
        client.email = req.body.email || email;
        client.phoneNumber = req.body.phoneNumber || phoneNumber;
        const updatedClient = await client.save();
        res.status(200).json(updatedClient);
    } else {
        res.status(404);
        throw new Error('Client not found');
    }
});

// Delete client
const deleteClient = asynchandler(async (req, res) => {
    const client = await Client.findById(req.params.id);

    if (!client) {
        res.status(404);
        throw new Error('Client not found');
    }

    if (client.userId.toString() !== req.user._id.toString()) {
        res.status(401);
        throw new Error('Unauthorized access');
    }

    await client.remove();
    res.json({ message: true });
});

module.exports = {
    addClient,
    getClientBymatricule,
    getClients,
    updateClient,
    deleteClient
}