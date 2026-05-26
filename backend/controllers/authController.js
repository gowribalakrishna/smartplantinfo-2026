let users = [];


// REGISTER USER
exports.registerUser = (
  req,
  res
) => {
  const {
    name,
    email,
    password,
  } = req.body;

  const existingUser = users.find(
    (u) => u.email === email
  );

  if (existingUser) {
    return res.status(400).json({
      message:
        "User already exists",
    });
  }

  const newUser = {
    id: Date.now(),
    name,
    email,
    password,
  };

  users.push(newUser);

  res.status(201).json({
    message:
      "User registered successfully",
    user: newUser,
  });
};


// LOGIN USER
exports.loginUser = (
  req,
  res
) => {
  const { email, password } =
    req.body;

  const user = users.find(
    (u) =>
      u.email === email &&
      u.password === password
  );

  if (!user) {
    return res.status(401).json({
      message:
        "Invalid email or password",
    });
  }

  res.status(200).json({
    message: "Login successful",
    user,
  });
};