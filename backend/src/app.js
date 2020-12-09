const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

//Routes
const employeesRoutes = require('./routes/employees.routes');

class Server{

    constructor(){
        this.app = express();
        this.Config();
        this.Routes();
        this.Start();
    }

    Config(){
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended:false}));
        this.app.use(cors());
    }

    Routes(){
        this.app.use('/employee',employeesRoutes);
    }

    Start(){
        this.app.listen(this.app.get('port'), (req,res)=>{
            console.log("Server on port "+this.app.get('port'));
        })
    }

}

new Server();