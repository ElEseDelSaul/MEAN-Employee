//Model
const Employee = require('../models/Employee');

const ctrlEmployee = {}
//'Add Employee
ctrlEmployee.createEmployee = async (req, res) => {
    const { name, app, apm, age } = req.body;
    const newEmployee = new Employee({ name, app, apm, age });
    await newEmployee.save();
    res.json({status:'Employee Added Successfully!'})
}
//'List Employees
ctrlEmployee.listEmployees = async (req, res) => {
    const Employees = await Employee.find();
    res.json(Employees);
}
//List Employee
ctrlEmployee.getEmployee = async (req, res) => {
    const { id } = req.params;
    const employee = await Employee.findById(id);
    res.json(employee);
}
//'Delte Employee
ctrlEmployee.deleteEmployee = async (req, res) => {
    const { id } = req.params;
    await Employee.findByIdAndRemove(id);
    res.json({status:'Employee Deleted'});
}
//'Update Employee
ctrlEmployee.updateEmployee = async (req, res) => {
    const { id } = req.params;
    const { name, app, apm, age } = req.body;
    const editEmployee = {name, app, apm, age};
    await Employee.findByIdAndUpdate(id,editEmployee);
    res.json({status:'Employee Updated'})
}

module.exports = ctrlEmployee;