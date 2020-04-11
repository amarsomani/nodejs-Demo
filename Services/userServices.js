var users = require('../models').User

exports.index = () => {
    return new Promise((resolve, reject) => {
        users.findAll().then(data => {
            resolve(data);
        })
    })

};

exports.saveUser = (user) => {
    return new Promise((resolve, reject) => {
        users.create({
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email
        }).then(user => resolve(user))
    })
}


exports.getUserById = (id) => {

    return new Promise((resolve, reject) => {
        users.findByPk(id).then(data => {
            resolve(data)
        })
    })
};

exports.deleteUser = (id) => {
    return new Promise((resolve, reject) => {
        users.destroy({
            where: {
                id: id
            }
        }).then((n) => {
            resolve(n)
        })
    })
}

exports.updateUser = (user) => {
    return new Promise((resolve, reject) => {
        users.update(
            {
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email
            },
            {
                where: {
                    id: user.id
                }
            }
        )
    })
}