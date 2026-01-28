require('dotenv').config();

const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Array en memoria 
let tasks = [];

// GET /api/tasks - Obtener todas las tareas
app.get('/api/tasks', (req, res) => {
    res.json(tasks);
});

// POST /api/tasks - Crear una nueva tarea
app.post('/api/tasks', (req, res) => {
    const newTask = {
        id: Date.now().toString(), // ID único
        title,
        description,
        completed: false,
        createdAt: new Date()
    };
    tasks.push(newTask);
    res.status(201).json(newTask);
});

// Levantar servidor
const PORT = process.env.PORT || 3000;

// PUT /api/tasks/:id - Actualizar una tarea 
app.put('/api/tasks/:id', (req, res) => {
    const { id } = req.params;
    const { title, description, completed } = req.body;
    const taskIndex = tasks.findIndex(t => t.id === id);

    if (taskIndex !== -1) {
        tasks[taskIndex] = {
            ...tasks[taskIndex],
            title: title !== undefined ? title : tasks[taskIndex].title,
            description: description !== undefined ? description : tasks[taskIndex].description,
            completed: completed !== undefined ? completed : tasks[taskIndex].completed
        };
        res.json(tasks[taskIndex]);
    } else {
        res.status(404).json({ message: 'Tarea no encontrada' });
    }
});

// DELETE /api/tasks/:id - Eliminar una tarea 
app.delete('/api/tasks/:id', (req, res) => {
    const { id } = req.params;
    const initialLength = tasks.length;
    tasks = tasks.filter(t => t.id !== id);

    if (tasks.length < initialLength) {
        res.status(204).send(); // éxito, sin contenido
    } else {
        res.status(404).json({ message: 'No se pudo eliminar: Tarea no encontrada' }); 
    }
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});