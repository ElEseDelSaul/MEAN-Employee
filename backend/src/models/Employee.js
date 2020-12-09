const { model, Schema } = require('mongoose');

const EmployeeSchema = new Schema({
    name: { type: String, required: true },
    app: { type: String, required: true },
    apm: { type: String, required: true },
    age: { type: Number , required: true}
}, {
    timestamps: true,
    versionKey: false
})

module.exports = model('Employee',EmployeeSchema)