const express = require('express');
const { addTodo, getTodos, updateTodo, deleteTodo } = require('../controllers/todoController');

const router = express.Router();

router.post('/', addTodo);
router.get('/', getTodos);
router.put('/:id', updateTodo);
router.delete('/:id', deleteTodo);

module.exports = router;
