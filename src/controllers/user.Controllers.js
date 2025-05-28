import { getAllUsersService, createUserService, getUserByIdService, updateUserService, deleteUserService } from "../models/user.models.js";

const handleResponse = (res, status, message, data=null) => {
    res.status(status).json({
        status,
        message,
        data
    });
}

export const createUsers = async (req, res) => {
    const { name, email } = req.body;
    try{
        const user = await createUserService(name, email);
        handleResponse(res, 201, 'User created successfully', user);
    }catch(err){
        next(err);
    }
}

export const getAllUsers = async (req, res, next) => {
    try{
        const users = await getAllUsersService();
        handleResponse(res, 200, 'Users retrieved successfully', users);
    }catch(err){
        next(err);
    }   
}

export const getUserById = async (req, res, next) => {
    try{
        const user = await getUserByIdService(req.params.id);
        if(!user) {
            return handleResponse(res, 404, 'User not found');
        }
        handleResponse(res, 200, 'User retrieved successfully', user);
    }catch(err) {
        next(err);
    }
}

export const updateUser = async (req, res, next) => {
    const { name, email } = req.body;
    try{
        const updatedUser = await updateUserService(req.params.id, name, email);
        if(!updatedUser) {
            return handleResponse(res, 404, 'User not found');
        }
        handleResponse(res, 200, 'User updated successfully', updatedUser);
    }catch(err) {
        next(err);
    }
}

export const deleteUser = async (req, res, next) => {
    const { name, email } = req.body;
    try{
        const deletedUser = await deleteUserService(req.params.id, name, email);
        if(!deletedUser) {
            return handleResponse(res, 404, 'User not found');
        }
        handleResponse(res, 200, 'User deleted successfully', deletedUser);
    }catch(err) {
        next(err);
    }
}