const TaskItem = ({ task, onDelete, onToggle }) => {
    return (
        <div className={`task-item ${task.completed ? 'completed' : ''}`}>
            <div className="task-content">
                <h3 style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                    {task.title}
                </h3>
                <p>{task.description}</p>
            </div>
            <div className="task-actions">
                <button onClick={() => onToggle(task.id)}>
                    {task.completed ? 'Deshacer' : 'Completar'}
                </button>
                <button onClick={() => onDelete(task.id)} className="btn-delete">
                    Eliminar
                </button>
            </div>
        </div>
    );
};

export default TaskItem;