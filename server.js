const express = require("express");
const app = express();

const mockuserData = [{ name: "Mark" }, { name: "Jill" }];

app.get("/users", (req, res) => {
    res.json({
      success: true,
      message: "successfully got users, Nice!",
      users: mockuserData,
    });
  });

app.get("/users/:id", (req, res) => {
  console.log(req.params.id);
  res.json({
    success: true,
    message: "got one user",
    user: req.params.id
  })
})


app.listen(8000, () => {
    console.log("Server is running");
  });
