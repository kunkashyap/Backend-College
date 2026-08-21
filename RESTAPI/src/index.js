// TODO: Express Routing & REST APIs
//
// Build these routes using the tasks data from ../data/tasks:
//
// 1) GET /tasks
//    - Return all tasks with status 200
//
// 2) GET /tasks/:id
//    - Return one task by id
//    - If not found, return 404 with: { error: "Task not found" }
//
// 3) POST /tasks
//    - Read title from req.body
//    - If title missing, return 400 with: { error: "title is required" }
//    - Create new task: { id: nextId, title, done: false }
//    - Return 201 with new task

const express = require("express");
const tasks = require("../data/tasks");


const app = express();
const PORT = 3000;

app.use(express.json());

// Write routes here

//GET /tasks

app.get('/tasks', (req, res)=> {
    res.status(200).json(tasks) //head and body(json)
})

//GET /tasks/:id

app.get('/tasks/:id', (req,res)=> {
   const id = req.params.id;

   //checking id
   tasks.find(t => t.id == id)
   if(!tasks) {
    res.status(404).json({"error : Task not found"})
   }

   res.status(200).json(tasks)
})

//POST tasks

app.post("/tasks", (req,res)=> {
    const {title} = req.body ;

    if (!title) {
        return res.status(400).json({ error: "title is required" });
  }

  const nextId = tasks.length ? Math.max(...tasks.map((t) => t.id)) + 1 : 1;
  const newTask = { id: nextId, title, done: false };
  tasks.push(newTask);

  res.status(201).json(newTask);
});


const server = app.listen(PORT);

module.exports = server;
