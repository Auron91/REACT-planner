import React, { useState, useEffect } from 'react';

import ThemeContextProvider from '../contexts/ThemeContext'
import Header from './Header'
import AddTask from './AddTask'
import TaskList from './TaskList';
import EditTask from './EditTask';

function App() {
    const [tasks, setTasks] = useState([
        { body: 'go to the gym', id: 1 },
        { body: 'go shoping', id: 2 },
        { body: 'go hiking', id: 3 },
    ])
    const [id, setId] = useState(4)
    const [toggleModal, setToggleModal] = useState(true);
    const [editedTask, setEditedTask] = useState('');

    const addTask = (body) => {
        const newTask = { body: body, id }
        setTasks([...tasks, newTask])
        setId(id + 1)
    }

    const handleEdit = (body, id) => {
        const newTasks = tasks;
        const taskIndex = newTasks.findIndex((element) => element.id === id);
        newTasks[taskIndex] = {...newTasks[taskIndex], body};
        setToggleModal(!toggleModal);
    }

    const handleDelete = (id) => {
        const newTasks = tasks.filter((task) => task.id !== id);
        setTasks(newTasks);
    }

    document.querySelector('#root').addEventListener('keydown', (e)=> {
        if (e.key === 'Escape') {
            setToggleModal(false);
        }
    })

    useEffect(() => {
        setToggleModal(!toggleModal)
    },[editedTask])

    return (
        <div className="container">
            <ThemeContextProvider>
                <Header />
                <TaskList tasks={tasks} handleDelete={handleDelete} setEditedTask = {setEditedTask}/>
                <AddTask addTask={addTask} />
                {toggleModal && <EditTask editedTask={editedTask} handleEdit={handleEdit} setToggleModal={setToggleModal} /> }
            </ThemeContextProvider>

        </div>
    )
}

export default App
