const express = require("express");
const bcrypt = require("bcrypt");

const users = [
  {
    id: 1,
    email: "alice.liddell@x.x",
    name: "alice",
  },
  {
    id: 5,
    email: "jean.nemmar@x.x",
    name: "jean",
  },
];
const todos = [];

const app = express();

// app.use(express.urlencoded());
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/registration", (req, res) => {
  const data = req.body;
  // todo: hasher mdp
  const user = data;
  users.push(user);
});

app.post("/login", (req, res) => {
  const data = req.body;
  const user = users.find(u=>u.email === data.email);
  if (!user) {
    res.json({message:"Identifiants incorrectes"})
  }

});

app.post("/api/todos", (req, res) => {
    const data = req.body;
    const newTodo = data;
    todos.push(newTodo)
});
app.get("/api/todos", (req, res) => {
  const data = todos;
  //todo: filtrer par id du user
  res.json(data);
});
app.get("/api/todos/:id", (req, res) => {});
app.delete("/api/todos/:id", (req, res) => {});

const port = 8080;
app.listen(port, () =>
  console.log("app is listenning on http://localhost:" + port)
);
