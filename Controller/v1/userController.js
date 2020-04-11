var userService = require('../../Services/userServices')


exports.index = (req, res) => {
    userService.index().then(users => {
        res.send(users);
    })
}

exports.saveUser = (req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;

    // if user updation is done
    const id = req.body.id;

    console.log("=======================");
    console.log(firstName);

    const user = {
        id: id,
        firstName: firstName,
        lastName: lastName,
        email: email
    };

    if (id) {
        userService.updateUser(user).then(n => {
            res.send(`No of records affected = ${n}`);
        })
    } else {
        userService.saveUser(user).then(data => {
            res.send(data)
        })
    }


}

exports.getUserById = (req, res) => {
    const id = req.params.id;
    userService.getUserById(id)
        .then(user => {
            res.send(user)
        })

}

exports.deleteUser = (req, res) => {
    const id = req.params.id;
    userService.deleteUser(id)
        .then(n => {
            res.send(`No of records deleted = ${n}`)
        })
}

exports.editUser = (req, res) => {
    const id = req.params.id;

}

