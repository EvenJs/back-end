const express = require('express');

const { 
  getAllStudent, getStudent, addStudent, updateStudent, deleteStudent,
} = require('../controllers/student');

const router = express.Router();

router.get('/', getStudent);
router.get('/:id', getStudent);
router.post('/', addStudent);
router.put('/:id', updateStudent);
router.delete('/:id', deleteStudent);

module.exports = router;