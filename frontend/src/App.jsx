import { useState, useEffect} from 'react';
import './App.css'
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
    const [tasks, setTasks] = useState([]);
    const API_URL = import.meta.env.VITE_API_URL // Usando la variable de entorno

    // Función para obtener tareas
    const fetchTasks = async () => {
        try {
            const response = await fetch(`${API_URL}/tasks`)
            const data = await response.json();
            setTasks(data);
        } catch (error) {
            console.error("Error al traer tareas:", error);
        }
    }
    useEffect(() => {
        fetchTasks();
    }, []);

    // POST: Crear una nueva tarea
    const addTask = async (task) => {
        try {
            const res = await fetch(`${API_URL}/tasks`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(task),
            });
            const newTask = await res.json();
            setTasks([...tasks, newTask]); // actualiza el estado con la nueva tarea
        } catch (err) {
            console.error("Error al crear tarea:", err);
        }
    };

    // DELETE: Eliminar una tarea
    const deleteTask = async (id) => {
        try {
            await fetch(`${API_URL}/tasks/${id}`, { method: 'DELETE' });
            setTasks(tasks.filter(t => t.id !== id)); // actualiza el estado eliminando la tarea
        } catch (err) {
            console.error("Error al eliminar tarea:", err);
        }
    };

    // PUT: Cambiar estado de completado
    const toggleTask = async (id) => {
        try {
            const task = tasks.find(t => t.id === id);
            const res = await fetch(`${API_URL}/tasks/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ completed: !task.completed })
            });
            const updatedTask = await res.json();
            setTasks(tasks.map(t => t.id === id ? updatedTask : t)); // actualiza el estado con la tarea modificada
        } catch (err) {
            console.error("Error al actualizar tarea:", err);
        }
    };

    return (
        <div className="App">
            <h1>Lista de Tareas - Academia ForIT</h1>

            <TaskForm onAdd={addTask} />

            <hr />

            <TaskList
                tasks={tasks}
                onDelete={deleteTask}
                onToggle={toggleTask}>
            </TaskList>
        </div>
    );
}

export default App;