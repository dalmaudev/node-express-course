const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const mockuserData = [{ name: "Mark" }, { name: "Jill" }];

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// get all users
app.get("/users", (req, res) => {
  res.json({
    success: true,
    message: "successfully got users, Nice!",
    users: mockuserData,
  });
});

// get users by ID, with : we can use variables in params
app.get("/users/:id", (req, res) => {
  console.log(req.params.id);
  res.json({
    success: true,
    message: "got one user",
    user: req.params.id,
  });
});

// post login username and password
app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const mockUsername = "billyTheKid";
  const mockPassword = "superSecret";

  if (username === mockUsername && password === mockPassword) {
    res.json({
      success: true,
      message: "password and username match!",
      token: "encrypted token goes here",
    });
  } else {
    res.json({
      success: false,
      message: "password and username do not match",
    });
  }
});

app.listen(8000, () => {
  console.log("Server is running");
});
