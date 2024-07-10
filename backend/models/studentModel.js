const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  department: {
    type: String,
  },
});

const Student = mongoose.model('Student', studentSchema);

// export default Student

module.exports = Student;
