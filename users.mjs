const users = [
  {
    id: 1,
    username: "johndoe",
    password: "password1",
    email: "johndoe@example.com"
  },
  {
    id: 2,
    username: "janedoe",
    password: "password2",
    email: "janedoe@example.com"
  },
  {
    id: 3,
    username: "bobsmith",
    password: "password3",
    email: "bobsmith@example.com"
  }
];

const getUsers = (req, res) => {
  res.json(users);
};

const getUserById = (req, res) => {
  const userId = parseInt(req.params.id);
  const userFound = users.find(user => user.id === userId);

  if (userFound) {
    res.json(userFound);
  } else {
    res.status(404).json({error: 'user not found'});
  }
};

const postUser = (req, res) => {
  const newUser = req.body;
  
  if (!newUser.username || !newUser.password || !newUser.email) {
    return res.status(400).json({error: "missing required fields"});
  }

  // Generate a new id by incrementing the last user's id
  const newId = users.length > 0 ? users[users.length - 1].id + 1 : 1;
  const userWithId = { id: newId, ...newUser };
  users.push(userWithId);

  res.status(201).json({message: 'user created', user: userWithId});
};

const putUser = (req, res) => {
  const userId = parseInt(req.params.id);
  const userIndex = users.findIndex(user => user.id === userId);

  if (userIndex === -1) {
    return res.status(404).json({error: 'user not found'});
  }

  const updatedUser = { ...users[userIndex], ...req.body };

  users[userIndex] = updatedUser;

  res.json({message: 'user updated', user: updatedUser});
};

// Dummy login, returns user object if username & password match
const postLogin = (req, res) => {
  const userCreds = req.body;
  
  if (!userCreds.username || !userCreds.password) {
    return res.sendStatus(400);
  }

  const userFound = users.find(user => user.username === userCreds.username);

  if (!userFound || userFound.password !== userCreds.password) {
    return res.status(403).json({error: 'username/password invalid'});
  }

  res.json({message: 'logged in successfully', user: userFound});
};

export {getUsers, getUserById, postUser, putUser, postLogin};
