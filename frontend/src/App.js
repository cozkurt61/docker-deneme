import React, { useEffect, useState } from 'react'
import TaskItem from './TaskItem'
import TaskInput from './TaskInput'
import TaskLayout from './TaskLayout'

function App() {
  const [tasks, setTasks] = useState([])
  const [input, setInput] = useState('')

  useEffect(() => {
    fetch('http://localhost:5000/api/items')
      .then((res) => res.json())
      .then((data) => setTasks(data))
  }, [])

  const addTask = async () => {
    if (!input.trim()) return
    const res = await fetch('http://localhost:5000/api/items', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: input, completed: false }),
    })
    const newTask = await res.json()
    setTasks([...tasks, newTask])
    setInput('')
  }

  const toggleTask = async (id, completed) => {
    const res = await fetch(`http://localhost:5000/api/items/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ completed: !completed }),
    })
    const updatedTask = await res.json()
    setTasks(tasks.map((task) => (task._id === id ? updatedTask : task)))
  }

  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/api/items/${id}`, {
      method: 'DELETE',
    })
    setTasks(tasks.filter((task) => task._id !== id))
  }

  return (
    <TaskLayout>
      <h1 style={{ textAlign: 'center', color: '#3a3a3a', marginBottom: 24 }}>
        Task Manager
      </h1>
      <TaskInput input={input} setInput={setInput} onAdd={addTask} />
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {tasks.map((task) => (
          <TaskItem
            key={task._id}
            task={task}
            onToggle={toggleTask}
            onDelete={deleteTask}
          />
        ))}
      </ul>
    </TaskLayout>
  )
}

export default App
