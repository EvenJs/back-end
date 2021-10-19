const Student = require('../models/student');
const Joi = require('joi');

async function getAllStudent(req, res) {
  const student = await Student.find().exec();
  res.json(student);
}

async function getStudent(req, res) {
  const students = await Student.find().exec();
  res.json(students);
}

async function addStudent(req, res) {
  const { firstName, lastName, email } = req.body;
  const student = new Student({
    firstName,
    lastName,
    email,
  });

  await student.save();
  return res.status(201).json(student);
  
  // 三种应对错误的方法
  // student.save().then((result) => { }).catch((error) => { });

  // try {
  //   await student.save();
  // } catch (error) {
  //   console.log(error)
  // }

  // student.save((error, result) => {
  //   if(error) {
  //     console.log(error);
  //     return next(error);
  //     return res.status(400).json({ "error": "cannot create student" });
  //   }
  //   return res.status(201).json(student)
  // })
}

async function updateStudent(req, res) {

}

async function deleteStudent(req, res) {
  
}

module.exports = { 
  getAllStudent,
  getStudent,
  addStudent,
  updateStudent,
  deleteStudent,
}