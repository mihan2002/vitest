// controllers/userController.js

import * as UserModel from "../models/userModel.js";

export const createUser = (req, res) => {
  console.log("🚀 ~ createUser ~ req.body:", req.body);
  const user = UserModel.createUser(req.body);

  res.status(201).json(user);
};

export const getUsers = (req, res) => {
  const users = UserModel.getUsers();
  res.json(users);
};

export const getUserById = (req, res) => {
  const user = UserModel.getUserById(req.params.id);
  if (user) res.json(user);
  else res.status(404).json({ message: "User not found" });
};

export const updateUser = (req, res) => {
  const user = UserModel.updateUser(req.params.id, req.body);
  if (user) res.json(user);
  else res.status(404).json({ message: "User not found" });
};

export const deleteUser = (req, res) => {
  const user = UserModel.deleteUser(req.params.id);
  if (user) res.json(user);
  else res.status(404).json({ message: "User not found" });
};
