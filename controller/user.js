const { UserModel } = require("../models/user.model");

const createuser = async (req, res) => {
    try {
        const { name, role, email, phone } = req.body;

        if (!name || !role || !email || !phone)
            return res.status(400).send({
                status: false,
                msg: "Please fill in all fields"
            });

        const newUser = new UserModel({ name, role, email, phone });

        await newUser.save();
        res.status(200).send({
            status: true,
            msg: "User created successfully",
        });
    } catch (error) {
        res.status(500).send({
            status: false,
            msg: "Error creating user: " + error.message,
        });
    }
};

const getUser = async (req, res) => {
    try {
        const getAllUser = await UserModel.find();
        if (getAllUser.length === 0)
            return res.status(404).send({
                status: false,
                msg: "No users found"
            });

        res.status(200).send({
            status: true,
            msg: getAllUser,
        });
    } catch (error) {
        res.status(500).send({
            status: false,
            msg: "Error retrieving users: " + error.message,
        });
    }
};

const getUserById = async (req, res) => {
    try {
        const { id } = req.params;

        if (!id) return res.status(400).send({
            status: false,
            msg: "No ID provided"
        });

        const getUser = await UserModel.findById(id);

        if (!getUser)
            return res.status(404).send({
                status: false,
                msg: "No user found with this ID"
            });

        res.status(200).send({
            status: true,
            msg: getUser,
        });
    } catch (error) {
        res.status(500).send({
            status: false,
            msg: "Error retrieving user: " + error.message,
        });
    }
};

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;

        if (!id) return res.status(400).send({
            status: false,
            msg: "No ID provided"
        });

        const deletedUser = await UserModel.findByIdAndDelete(id);

        if (!deletedUser)
            return res.status(404).send({
                status: false,
                msg: "No user found with this ID"
            });

        res.status(200).send({
            status: true,
            msg: "User deleted successfully",
        });
    } catch (error) {
        res.status(500).send({
            status: false,
            msg: "Error deleting user: " + error.message,
        });
    }
};

const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, role, email, phone } = req.body;

        if (!id) return res.status(400).send({
            status: false,
            msg: "No ID provided"
        });

        const updatedUser = await UserModel.findByIdAndUpdate(
            id,
            { name, role, email, phone },
            { new: true }
        );

        if (!updatedUser)
            return res.status(404).send({ status: false, msg: "No user found with this ID" });

        res.status(200).send({
            status: true,
            msg: "User updated successfully",
            user: updatedUser
        });
    } catch (error) {
        res.status(500).send({
            status: false,
            msg: "Error updating user: " + error.message,
        });
    }
};

module.exports = {
    createuser,
    getUser,
    getUserById,
    deleteUser,
    updateUser,
};
