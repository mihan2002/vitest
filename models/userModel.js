// models/userModel.js

let users = [];
let idCounter = 1;

export const createUser = (userData) => {

  const newUser = { id: idCounter++, ...userData };
  users.push(newUser);
  return newUser;
};


export const getUsers = () => {
  return users;
};

export const getUserById = (id) => {
  return users.find((user) => user.id === Number(id));
};

export const updateUser = (id, userData) => {
  const index = users.findIndex((user) => user.id === Number(id));
  if (index !== -1) {
    users[index] = { id: Number(id), ...userData };
    return users[index];
  }
  return null;
};

export const deleteUser = (id) => {
  const index = users.findIndex((user) => user.id === Number(id));
  if (index !== -1) {
    const deletedUser = users.splice(index, 1);
    return deletedUser[0];
  }
  return null;
};

// For testing purposes
export const resetUsers = () => {
  users = [];
  idCounter = 1;
};
