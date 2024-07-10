const express = require('express');
const app = express();
const mongoose = require('mongoose');
const chalk = require('chalk');
const morgan = require('morgan');
const studentRoutes = require('./routes/studentRoutes');
const actressesRoutes = require('./routes/actressesRoutes');
const userRoutes = require('./routes/userRoutes');
const validator = require('validator');
const errorHandler = require('./middleware/errorHandler');

// object data modelling library
//mongoose

// localhost = 127.0.0.1
//middleware
app.use(morgan('tiny'));
app.use(express.json());

//1Step Connection mongodb to the express app ;
mongoose
  .connect('mongodb://localhost:27017/student')
  .then(() => {
    console.log(chalk.blue('Connection is Successfull'));
  })
  .catch((error) => {
    console.log(error);
  });

// const express = require('express') ;

//2nd you have to create a schema(structure for the document)

//3 To create a collection = Model

// app.post('/addStudent', studentController.createStudent);
// app.get('/getallstudents', studentController.getAllStudent);
// app.put('/update_student/:id', studentController.updateStudent);
// app.delete('/delete_student/:id', studentController.deleteStudent);

//as a middleware use the studentRoutes

app.use('/api', studentRoutes);
app.use('/api', actressesRoutes);
app.use('/api', userRoutes);

// Student.find()
// Student.findByIdAndDelete()
// Student.findByIdAndUpdate()

//global error handler
app.use(errorHandler);

app.listen(3000, () => {
  console.log(chalk.black.yellow('Server is  running on the Port 3000'));
});

//  mvc => m = model , schema modal model
// v= view  => react application  available
// c = controller => routes => req => navigate to correct controller

// mvc  =>
// create seprate folder => model
//create a folder named => controller

//erro handling //mongoose validation //login signup
//node environment development and production //mongoodb queries

// we have only covered crud
