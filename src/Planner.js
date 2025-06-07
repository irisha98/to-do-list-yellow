import React from 'react';
import './planner.css';
import { useState, useEffect } from 'react';

function Planner () {

    // const daysOfWeek = t('planner.days', { returnObjects: true });
     const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    
    const [tasks, setTasks] = useState(() => {
        const saved = localStorage.getItem('planner-tasks');
        return saved ? JSON.parse(saved) : Array(7).fill([]);
    });

    const [inputs, setInputs] = useState(Array(7).fill(''));

    const handleAddTask = (dayIndex) => {
    const input = inputs[dayIndex];
    if (!input.trim()) return;

    const newTasks = [...tasks];
    newTasks[dayIndex] = [...newTasks[dayIndex], { text: input, completed: false }];
    setTasks(newTasks);

    const newInputs = [...inputs];
    newInputs[dayIndex] = '';
    setInputs(newInputs);
  };

    const handleToggleComplete = (dayIndex, taskIndex) => {
    const newTasks = [...tasks];
    newTasks[dayIndex][taskIndex].completed = !newTasks[dayIndex][taskIndex].completed;
    setTasks(newTasks);
  };

    const handleDelete = (dayIndex, taskIndex) => {
    const newTasks = [...tasks];
    newTasks[dayIndex].splice(taskIndex, 1);
    setTasks(newTasks);
  };

    useEffect(() => {
        localStorage.setItem('planner-tasks', JSON.stringify(tasks));
    }, [tasks]);

    return  <div className='planner-container'>
        <h1 className='planner-title'>SelfCare Planner</h1>
        <div className='week-grid'>
            {daysOfWeek.map((day, dayIndex) => (
            <div className='day-column' key={dayIndex}>
                <h2 className='day-title'>{day}</h2>
                <div className='task-form'>
                    <input
                    type="text"
                    placeholder="Add a task..."
                    className='task-input'
                    value={inputs[dayIndex]}   
                    onChange={(e) => {
                        const newInputs = [...inputs];
                        newInputs[dayIndex] = e.target.value;
                        setInputs(newInputs);
                    }}  
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            handleAddTask(dayIndex);
                        }
                    }}  
                    />
                    <button className='add-btn' onClick={() => handleAddTask(dayIndex)}>+</button>
                </div>
                <ul className='task-list'>
                    {tasks[dayIndex].map((task, taskIndex) => (
                        <li key={taskIndex} className={task.completed ? 'completed' : ''}>
                        <span className='task-text'>{task.text}</span>
                        <div>
                            <button  className='check-btn' onClick={() => handleToggleComplete(dayIndex , taskIndex)}>✓</button>
                            <button className='delete-btn' onClick={() => handleDelete(dayIndex, taskIndex)}>🗑</button>
                        </div>
                    </li>
                    ))}
                </ul>
            </div>
         ))}
        </div> 
    </div>
}
 export default Planner;