import express from 'express';

import { createUser, getUsers, getUser, deleteUser, updateUser } from './controllers/users.js';

const router = express.Router();

let users = [];


//all routes here are starting with /users so just use '/'



//GET: for finding all users in the database:
router.get('/', getUsers);



//POST: for Creating/Adding users to the databse:
router.post('/', createUser);



//for getting users by their userId:
router.get('/:id', getUser);



//DELETE: for Deleting users via Id in a database:
router.delete('/:id', deleteUser);



//PUT: for changing the whole user
//PATCH: for updating a user's INFO in a database:
router.patch('/:id', updateUser);


export default router;