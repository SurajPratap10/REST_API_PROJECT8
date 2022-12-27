import { v4 as uuidv4 } from 'uuid';

let users = [];

//GET: for finding all users in the database:
export const getUsers = (req, res) => {
    console.log(users);

    res.send(users);
}

//POST: for Creating/Adding users to the databse:
export const createUser = (req, res) => {
    const user = req.body;

    const uderId = uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

    users.push({ ...user, id: uuidv4()});

    res.send(`User with the name ${user.firstName} was added to the database! `);

}

//for getting users by their userId:
export const getUser =  (req, res) => {
    const { id }  = req.params;

    const foundUser = users.find((user) => user.id === id);
    res.send(foundUser);
}

//DELETE: for Deleting users via Id in a database:
export const deleteUser = (req, res) => {
    const { id } = req.params;

    users = users.filter((user) => user.id !== id);

    res.send(`User with the id ${id} was deleted from the database.`);

}

//PATCH: for updating a user's INFO in a database:
export const updateUser = (req, res) => {
    const { id } = req.params;

//possible updates that can be recieved in the databse via user
const { firstName, lastName, age } = req.body;

const user = users.find((user) => user.id === id);


if(firstName) {
    user.firstName = firstName;
}

if(lastName) {
    user.lastName = lastName;
}

if(age) {
    user.age = age;
}

res.send(`User with the id ${id} was updated in the database.`);

}