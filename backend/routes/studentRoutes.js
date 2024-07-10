//NOTE REQUIRE EXPRESS
const express = require('express');
const studentController = require('../controllers/studentController')
const router = express.Router();

router.post('/addStudent', studentController.createStudent);
router.get('/getallstudents', studentController.getAllStudent);
router.put('/update_student/:id', studentController.updateStudent);
router.delete('/delete_student/:id', studentController.deleteStudent);

module.exports = router ; 
