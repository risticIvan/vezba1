const getUsers = require('./UserRepository');
const getBasic = require('./User')

var users  = getUsers();

users.forEach(element => {
    console.log(element);
});

