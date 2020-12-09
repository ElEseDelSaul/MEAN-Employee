const { Router } = require('express');

//Controller
const {
    createEmployee,
    listEmployees,
    getEmployee,
    deleteEmployee,
    updateEmployee
} = require('../controllers/employees.controller');

class EmployeesRoutes{

    constructor(){
        this.router = Router();
        this.Routes();
    }

    Routes(){
        this.router.get('/',listEmployees);
        this.router.get('/:id',getEmployee);
        this.router.post('/',createEmployee);
        this.router.delete('/:id',deleteEmployee);
        this.router.put('/:id',updateEmployee);
    }

}

const employeesRoutes = new EmployeesRoutes();
module.exports = employeesRoutes.router;