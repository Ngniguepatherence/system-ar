const jwt = require('jsonwebtoken');
const company = require('../model/companies');
require('dotenv').config();

const CompanyController = {
    AuthCompany: async (req,res) => {
        try {
            const {email, password} = req.body;
            const cp = await company.findOne({email})
            if(!cp) {
                res.status(404).json({message:"Company not found"});
            }
            if(password != cp.password) {
                res.status(404).json({message: "Password incorrect"});
            }
            const token = jwt.sign({user: cp}, process.env.JWT_SECRET);
            res.status(200).json({token});
        }
        catch(error) {
            res.status(500).json({message : "Server error...."});
        }
    },
    addCompany: async (req,res) => {

        try {
            const { name, email, password,phone, address, country,website,logo,owner,sector } = req.body;
            const newCompany = new company({
                name: name, email:email, password: password, phone: phone, address: address, country: country, website: website, logo: logo, owner: owner, sector: sector
            });
            await newCompany.save();
            res.json(newCompany);
        }
        catch(error) {
            res.status(500).json({ message: error.message} );
        }
    },

    getAll: async (req,res) => {
        try {
            const cmp = await company.find();
            res.json(cmp);
        }
        catch(error) {

            res.status(500).json({ message: error.message});
        }
    }
};

module.exports = CompanyController;