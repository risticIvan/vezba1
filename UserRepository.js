const fs = require('fs');
const user = require('./User');

function getUsers(){
    //read all data from json
    var data = JSON.parse(fs.readFileSync('users.json', 'utf-8'));

    //convert from json to User model
    var userList = [];
    data.forEach(element => {
        var objUser = new user(element.firstname, element.lastname, element.birthdate, element.email);
        userList.push(objUser);
    });
    
    //return array of users
    return userList;
}

module.exports = getUsers


