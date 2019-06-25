const express = require("express");

const server = express();

server.use(express.json());

const projects = [];

function checkProjectExists(req, res, next) {
  const project = projects.find(project => project.id == req.params.id);
  if (!project) {
    return res.status(400).json({ error: "Project does not exists" });
  }
  return next();
}

server.post("/projects", (req, res) => {
  const { id, title } = req.body;

  projects.push({
    id: id,
    title: title,
    tasks: []
  });

  return res.json(projects);
});

server.post("/projects/:id/tasks", checkProjectExists, (req, res) => {
  const project = projects.find(project => project.id == req.params.id);
  project.tasks.push(req.body.tasks);

  return res.json(project);
});

server.get("/projects", (req, res) => {
  return res.json(projects);
});

server.put("/projects/:id", checkProjectExists, (req, res) => {
  const project = projects.find(project => project.id == req.params.id);
  project.title = req.body.title;

  return res.json(project);
});

server.delete("/projects/:id", checkProjectExists, (req, res) => {
  const project = projects.findIndex(project => project.id == req.params.id);
  projects.splice(project, 1);

  return res.send();
});

server.listen(3000);
