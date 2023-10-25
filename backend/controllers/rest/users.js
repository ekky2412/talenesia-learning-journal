import { DataUser } from '../../models/user_model.js';

export const getUsers = async (req, res) => {
    try {
        let result = await DataUser.find();
        res.send(result).status(200);
    } catch(error) {
        res.status(500).json({message: error.message});
    }
};

export const getDetailUser = async (req, res) => {};

export const addUser = async (req, res) => {};

export const addLoginAuth = async (req, res) => {};
