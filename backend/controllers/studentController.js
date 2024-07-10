const Student = require('../models/studentModel');

exports.createStudent = async (req, res) => {
  console.log(req.body);
  const newStudent = await Student.create(req.body);
  res.json({
    newStudent,
  });
};

exports.getAllStudent = async (req, res) => {
  try {
    const allStudent = await Student.find();
    res.status(200).json({
      length: allStudent.length,
      data: allStudent,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.updateStudent = async (req, res) => {
  console.log(req.params);
  const student = await Student.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json({
    student,
  });
};

exports.deleteStudent = async (req, res) => {
  const student = await Student.findByIdAndDelete(req.params.id);

  res.status(200).json({
    student,
  });
};
