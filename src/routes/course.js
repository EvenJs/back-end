const express = require('express');
const { getAllCourses, getCourseById, addCourse, updateCourseById, deleteCourseById } = require('../controllers/course');

const router = express.Router();

router.get('', getAllCourses);
router.get('/:id', getCourseById);
router.post('',addCourse);
router.put('/:id', updateCourseById);
router.delete('/:id', deleteCourseById);

module.exports = router;
