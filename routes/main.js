const express = require("express");

const {
  getTodos, getTodoById, deleteTodo, addTodo, updateTodo ,activeTodos, expiredTodos, doneTodos
} = require("../controllers/todo"); 

const {
  getNotes, getNoteById, deleteNote, addNote, updateNote 
} = require("../controllers/note"); 

const router = express.Router();

router.get("/todos/activeTodos", activeTodos);
router.get("/todos/doneTodos", doneTodos);
router.get("/todos/expiredTodos", expiredTodos);
router.get("/todos", getTodos);
router.get("/todos/:id", getTodoById);
router.delete("/todos/:id", deleteTodo);
router.post("/todos", addTodo);
router.put("/todos/:id", updateTodo);

router.get("/notes", getNotes);
router.get("/notes/:id", getNoteById);
router.delete("/notes/:id", deleteNote);
router.post("/notes", addNote);
router.put("/notes/:id", updateNote);

module.exports = router;
