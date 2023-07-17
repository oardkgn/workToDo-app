const User = require("../models/User");
const Todo = require("../models/Todo");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");

// GET method Private ---------------------------------------------------------------------------

const getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find().select("-password").lean();
  if (!users?.length) {
    return res.status(400).json({ message: "No users found" });
  }
  res.json(users);
});

// POST method Private /users  ---------------------------------------------------------------------------

const createNewUser = asyncHandler(async (req, res) => {
  const { username, password, roles } = req.body;

  //confirm data
  if (!username || !password || !Array.isArray(roles) || !roles.length) {
    return res.status(400).json({ message: "All fields are required." });
  }

  //check duplicate
  const duplicate = await User.findOne({ username }).lean().exec();
  if (duplicate) {
    return res
      .status(409)
      .json({ message: "This username is currently taken." });
  }

  //hash password
  const hashedPwd = await bcrypt.hash(password, 10);
  const userObj = { username, password: hashedPwd, roles };

  //create new user in db
  const user = await User.create(userObj); // get user first
  if (user) {
    // created
    res.status(201).json({ message: `New user ${username} is created.` });
  } else {
    res.status(201).json({ message: `Invalid user data received.` });
  }
});

// PATCH method Private /users  ---------------------------------------------------------------------------

const updateUser = asyncHandler(async (req, res) => {
  const { id, username, password, roles, active } = req.body;

  //confirm data
  if (
    !id ||
    !username ||
    !Array.isArray(roles) ||
    !roles.length ||
    typeof active !== "boolean"
  ) {
    return res.status(400).json({ message: "All fields are required." });
  }

  const user = await User.findById(id).exec(); //get the user first
  if (!user) {
    return res.status(400).json({ message: "User not found!" }); // user not foun in the db
  }

  //check duplicate
  const duplicate = await User.findOne({ username }).lean().exec();
  if (duplicate && duplicate?._id.toString() !== id) {
    // check the duplicate username is belongs to one user or not
    return res
      .status(409)
      .json({ message: "This username is currently taken." });
  }

  //create updated user in db
  user.username = username;
  user.roles = roles;
  user.active = active;

  if (password) {
    //hash password
    const hashedPwd = await bcrypt.hash(password, 10);
    user.password = hashedPwd;
  }
  // save updated user
  const updateUser = await user.save();
  if (updateUser) {
    // updated
    res.status(201).json({ message: `The user ${username} is updated.` });
  }
});

// DELETE method Private /users  ---------------------------------------------------------------------------

const deleteUser = asyncHandler(async (req, res) => {
  const { id } = req.body;
  //check id valid
  if (!id) {
    res.status(400).json({ message: "User id required!" });
  }
  //check this user has todos
  const todo = await Todo.findOne({ user: id }).lean().exec();
  if (todo) {
    res.status(400).json({ message: "User has assigned works to do." });
  }
  //get user
  const user = await User.findById(id).exec();

  if (!user) { // if user not found
    res.status(400).json({ message: "User not found." });
  }
  
  const result = await user.deleteOne()
  if (result) {
    // deleted
    res.status(201).json(`The user ${result.username} with id ${result.id} is deleted`);
  }
});

module.exports = {
  getAllUsers,
  createNewUser,
  updateUser,
  deleteUser,
};
