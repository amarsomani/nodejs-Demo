const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors')
const bodyParser = require('body-parser')

var app = express();
const port = 4000;



const employeeRoutes = require('./Routes/v1/employeeRoutes')
// app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
app.use('/v1/employee', employeeRoutes);

app.listen(port, () => {
    debug(`listening at port ${chalk.green(port)}`);
});
