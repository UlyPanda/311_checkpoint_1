const users = require('../data/index');
const sampleUser = require('../data/sampleUser');

const listUsers = (req, res) => {
    return res.json(users);
}

const showUser = (req, res) => {
    let userFound = users.find(user => user.id == Number(req.params.id));
    if(userFound) {
        res.json(users.filter(user => user.id == Number(req.params.id)));
    } else {
        res.status(404).json({ Error: `User ${req.params.id} does not exist` })
    }
}

const createUser = (req, res) => {
    sampleUser.id = users.length + 1;
    users.push(sampleUser);
    res.json(users);
}

const updateUser = (req, res) => {
    let userFound = users.find(user => user.id == Number(req.params.id));
    if(userFound) {
        users.forEach(user => {
            if(user.id == Number(req.params.id)) {
                user.name = sampleUser.name;
                return res.json(user)
            }
        })
    } else {
        res.status(400).json({ Error: `No user with the id of ${req.params.id}` });
    }
}

const deleteUser = (req, res) => {
    let userFound = users.find(user => user.id == Number(req.params.id));
    if(userFound) {
        users.forEach(user => {
            if(user._id == Number(req.params.userId)) {
                user.isActive = false;
                res.send(`User has been deleted. (Inactive)`);
            }
        })
    } else {
        res.status(404).json({ Error: `User ${req.params.id} does not exist.` })
    }
}

module.exports = { listUsers, showUser, createUser, updateUser, deleteUser }