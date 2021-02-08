import React, {  } from 'react';
import Task from './Task'
import { calendarIcon } from '../svg/icons'

const TaskList = ({ tasks, handleDelete, setEditedTask }) => {
    const renderTasks = tasks.map((task) => {
        return (
            <Task task={task} key={task.id} handleDelete={handleDelete} setEditedTask={setEditedTask} />
        )
    })

    return (
        <div className="task-list" >
            <div className="task-list__header">
                { calendarIcon }
                <p>Task List</p>
            </div>
            { renderTasks}
        </div>
    )
}

export default TaskList
