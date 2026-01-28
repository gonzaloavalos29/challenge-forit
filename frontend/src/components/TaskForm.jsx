import { useState } from 'react';

const TaskForm = ({ onAdd }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validación simple
        if (!title.trim()) {
            return alert('El título es obligatorio');
        }

        onAdd({ title, description });

        // Limpiar el formulario después de enviar
        setTitle('');
        setDescription('');
    };

    return (
        <form onSubmit={handleSubmit} className="task-form">
            <input
                type="text"
                placeholder='Título de la tarea'
                value={title}
                onChange={(e) => setTitle(e.target.value)}           
                required
            />
            <textarea
                placeholder='Descripción de la tarea (opcional)'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <button type="submit">Agregar Tarea</button>
        </form>
    );
};

export default TaskForm;