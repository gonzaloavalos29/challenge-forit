import TaskItem from './TaskItem';

const TaskList = ({ tasks, onDelete, onToggle }) => {
    if (tasks.length === 0) {
        return <p>No hay tareas registradas aún.</p>;
    }

    return (
        <div className="task-list-container">
            {tasks.map((task) => (
                <TaskItem
                    key={task.id}
                    task={task}
                    onDelete={onDelete}
                    onToggle={onToggle}
                />
            ))}
        </div>
    );
};

export default TaskList;