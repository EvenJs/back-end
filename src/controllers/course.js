const Course = require('../models/course');
const Joi = require('joi');

async function getAllCourses(req, res) {
  const course = await Course.find().exec();
  res.json(course);
}

async function addCourse(req, res) {
  // const { name, code, description } = req.body;
  const schema = Joi.object({
    name: Joi.string().required(),
    code: Joi.string()
      .regex(/^[a-zA-Z]+[0-9]+$/)
      .required(),
    description: Joi.string(),
  });
  const { name, code, description } = await schema.validateAsync(req.body, {
    allowUnknown: true,
    stripUnknown: true,
  })
  //validate data

  const course = new Course({
    name,
    description,
    code,
  });

  await course.save();
  return res.status(201).json(course);
}

async function getCourseById(req, res) {
  const { id } = req.params;
  const course = await Course.findById(id).exec();

  if (!course) {
    return res.sendStatus(404);
  }
  return res.json(course);
}

async function updateCourseById(req, res) {
  const { id } = req.params;
  const { name, description } = req.body;
  // updateOne {}
  const course = await Course.findByIdAndUpdate(id, {name, description}, {new: true}).exec();

  if (!course) {
    return res.sendStatus(404);
  }
  return res.json(course);
}

async function deleteCourseById(req, res) {
  const { id } = req.params;
  const course = await Course.findByIdAndDelete(id).exec();
  if (!course) {
    return res.sendStatus(404);
  }
  return res.sendStatus(204);
}


module.exports = {
  getAllCourses,
  getCourseById,
  addCourse,
  updateCourseById,
  deleteCourseById,
}