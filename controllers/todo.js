const Todo = require("../Models/todo_model");

const getTodos = (req, res)=> {
    Todo.find()
    .then(todos => res.json(todos))
    .catch(err => res.status(400).json('Error: ' + err));
};

const getTodoById = (req, res) => {
    let id = req.params.id;
    Todo.findById(id, function(err, todo) {
        res.json(todo);
    });
}


const deleteTodo = (req, res) => {
   Todo.findByIdAndDelete(req.params.id)
    .then(() => res.json('Todo deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
}


const addTodo = (req, res) => {
   const title = req.body.title;
   const description = req.body.description;
   const date = Date.parse(req.body.date);
   const time = Number(req.body.time);
   const status = req.body.status;


    const todo = new Todo({
        title,
        description,
        date,
        time,
        status
    });

  todo.save()
  .then(() =>  res.status(201).json({
                body: todo,
                message: `Todo added successfully`
            }))
  .catch(err => res.status(400).json('Error: ' + err));
}


const updateTodo = function (req, res) {
     Todo.findById(req.params.id)
    .then(todo => {
      todo.title = req.body.title;
      todo.description = req.body.description;
      todo.status = req.body.status;
      todo.date = Date.parse(req.body.date);
      todo.time = Number(req.body.time);
      todo.save()
  .then(() =>  res.status(201).json({
                body: todo,
                message: `Todo updated successfully`
            }))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
}





const activeTodos = function (req, res) {
   Todo.aggregate([
  {
    '$match': {
      'status': 'active'
    }
  }
])
    .then((todos) => {

        res.json(todos)
    })
    .catch(err => res.status(400).json('Error: ' + err));
   
}


const expiredTodos = function (req, res) {
   Todo.aggregate([
  {
    '$match': {
      'status': 'expired'
    }
  }
])
    .then((todos) => {

        res.json(todos)
    })
    .catch(err => res.status(400).json('Error: ' + err));
   
}


const doneTodos = function (req, res) {
   Todo.aggregate([
  {
    '$match': {
      'status': 'done'
    }
  }
])
    .then((todos) => {

        res.json(todos)
    })
    .catch(err => res.status(400).json('Error: ' + err));
   
}









module.exports = { getTodos, getTodoById, deleteTodo, addTodo, updateTodo , activeTodos, doneTodos, expiredTodos}; 