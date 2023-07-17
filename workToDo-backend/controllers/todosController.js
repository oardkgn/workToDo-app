const User = require("../models/User");
const Todo = require("../models/Todo");
const asyncHandler = require("express-async-handler");

// GET method Private /todos ---------------------------------------------------------------------------

const getAllTodos = asyncHandler(async (req, res) => {
  const todos = await Todo.find().lean();
  if (!todos?.length) {
    return res.status(400).json({ message: "There is no work to do." });
  }
  const todosWithUser = await Promise.all(
    todos.map(async (todo) => {
      const user = await User.findById(todo.user).lean().exec();
      return { ...todo, username: user.username };
    })
  );

  res.json(todosWithUser);
});

// POST method Private /todos  ---------------------------------------------------------------------------

const createNewTodo = asyncHandler(async (req, res) => {
  const { user, title, text } = req.body;

  // Confirm data
  if (!user || !title || !text) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // Check for duplicate title and check the duplicate todo title is belongs to one user or not
  let duplicate = await Todo.find({ title }).lean().exec();

  duplicate.find((todo) => {
    if (todo.user.toString() === user && todo.title === title) {
      duplicate = todo;
    }
  });

  console.log(duplicate);

  if (duplicate?.title) {
    return res
      .status(409)
      .json({ message: "This todo title is already been used." });
  }

  // Create and store the new todo
  const todo = await Todo.create({ user, title, text });
  console.log(todo, 2);
  if (todo) {
    // Created
    return res.status(201).json({ message: "New todo created" });
  } else {
    return res.status(400).json({ message: "Invalid todo data received" });
  }
});

// PATCH method Private /todos  ---------------------------------------------------------------------------

const updateTodo = asyncHandler(async (req, res) => {
  const { id, title, text, completed, user } = req.body;

  //confirm data
  if (!id || !title || !text || !user || typeof completed !== "boolean") {
    return res.status(400).json({ message: "All fields are required." });
  }

  const todo = await Todo.findById(id).exec(); //get the todo first
  if (!todo) {
    return res.status(400).json({ message: "Todo not found!" }); // todo not found in the db
  }

  //check duplicate
  let duplicate = await Todo.find({ title }).lean().exec();
  let userRole = await User.findById(user).lean().exec();
  let selectedTodo = await Todo.findById(id).lean().exec();

  if (!userRole.roles.includes('Manager') && user !== selectedTodo.user.toString()) {
    return res.status(400).json({ message: "You dont have permission for this." }); // we dont allow the users can change other users todos unless it manager
  }

  duplicate.find((todo) => {
    if (todo.user.toString() === user && todo.title === title) {
      duplicate = todo;
    }
  });

  console.log(duplicate);

  if (duplicate?.title) {
    return res
      .status(409)
      .json({ message: "This todo title is already been used." });
  }

  //create updated todo in db
  todo.title = title;
  todo.text = text;
  todo.completed = completed;
  todo.user = user;
  // save updated todo
  const updateTodo = await todo.save();
  if (updateTodo) {
    // updated
    res.status(201).json({ message: `The todo ${updateTodo.title} is updated.` });
  }
});

// DELETE method Private /todos  ---------------------------------------------------------------------------

const deleteTodo = asyncHandler(async (req, res) => {
  const { id } = req.body;
  //check id valid
  if (!id) {
    res.status(400).json({ message: "Todo id required!" });
  }
  //get todo
  const todo = await Todo.findById(id).exec();

  if (!todo) {
    // if user not found
    res.status(400).json({ message: "Todo not found." });
  }

  const result = await todo.deleteOne();
  if (result) {
    // deleted
    res
      .status(201)
      .json({message: `The todo ${result.title} of ${result.user} is deleted.`});
  }
});

module.exports = {
  getAllTodos,
  createNewTodo,
  updateTodo,
  deleteTodo,
};
