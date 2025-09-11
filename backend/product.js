// project.js
const express = require('express');
const router = express.Router();

// Sample projects
let projects = [{ id: 1, name: 'Project A' }];

// Get all projects
router.get('/', (req, res) => {
    res.json(projects);
});

// Add a new project
router.post('/', (req, res) => {
    const newProject = { id: projects.length + 1, name: req.body.name };
    projects.push(newProject);
    res.status(201).json(newProject);
});

module.exports = router;
