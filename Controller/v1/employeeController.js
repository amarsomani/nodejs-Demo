var employeeService = require('../../Services/employeeServices')


exports.getAllEmployees = (req, res) => {
    employeeService.index().then(employees => {
        res.send(employees);
    })
}

exports.saveEmployee = (req, res) => {

    const emp = {
        id: req.body.id,
        name: req.body.name,
        designation: req.body.designation
    };

    employeeService.saveEmployee(emp).then(data => {
        res.send(data)
    })
}

exports.getEmployeeById = (req, res) => {
    const id = req.params.id;
    employeeService.getEmployeeById(id)
        .then(emp => {
            res.send(emp)
        })

}

exports.deleteEmployee = (req, res) => {
    const id = req.params.id;
    employeeService.deleteEmployee(id)
        .then(n => {
            res.send(`No of records deleted = ${n}`)
        })
}

exports.updateEmployee = (req, res) => {

    const emp = {
        id: req.body.id,
        name: req.body.name,
        designation: req.body.designation
    }

    if (emp.id !== null && emp.name !== null && emp.designation !== null) {
        employeeService.updateEmployee(emp).then((n) => {
            res.send(emp);
        })
    }


}

