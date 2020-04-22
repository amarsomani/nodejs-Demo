var employees = require('../models').employee

exports.index = () => {
    return new Promise((resolve, reject) => {
        employees.findAll().then(data => {
            resolve(data);
        })
    })

};

exports.saveEmployee = (emp) => {
    return new Promise((resolve, reject) => {
        employees.create({
            id: emp.id,
            name: emp.name,
            designation: emp.designation
        }).then(emp => resolve(emp))
    })
}


exports.getEmployeeById = (id) => {

    return new Promise((resolve, reject) => {
        employees.findByPk(id).then(data => {
            resolve(data)
        })
    })
};

exports.deleteEmployee = (id) => {
    return new Promise((resolve, reject) => {
        employees.destroy({
            where: {
                id: id
            }
        }).then((n) => {
            resolve(n)
        })
    })
}

exports.updateEmployee = (emp) => {
    return new Promise((resolve, reject) => {
        employees.update(
            {
                name: emp.name,
                designation: emp.designation
            },
            {
                where: {
                    id: emp.id
                }
            }
        ).then(n => resolve(n))
    })
}