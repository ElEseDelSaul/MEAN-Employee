const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/ng_employees',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).
then(db=>console.log("Database is Connected.")).
catch(err=>console.log("Error DB: "+err));