import React from 'react'

const TaskItem = ({ task, onToggle, onDelete }) => (
  <li
    style={{
      display: 'flex',
      alignItems: 'center',
      background: task.completed ? '#e3fcef' : '#f7f7f7',
      marginBottom: 10,
      borderRadius: 8,
      padding: '10px 14px',
      boxShadow: task.completed
        ? '0 2px 8px rgba(76,175,80,0.08)'
        : '0 2px 8px rgba(0,0,0,0.04)',
      textDecoration: task.completed ? 'line-through' : 'none',
      color: task.completed ? '#388e3c' : '#333',
      transition: 'all 0.2s',
    }}
  >
    <input
      type="checkbox"
      checked={task.completed}
      onChange={() => onToggle(task._id, task.completed)}
      style={{ marginRight: 12, width: 18, height: 18 }}
    />
    <span style={{ flex: 1 }}>{task.name}</span>
    <button
      onClick={() => onDelete(task._id)}
      style={{
        marginLeft: 12,
        background: '#e57373',
        color: '#fff',
        border: 'none',
        borderRadius: 6,
        padding: '6px 12px',
        cursor: 'pointer',
        fontWeight: 500,
      }}
    >
      Sil
    </button>
  </li>
)

export default TaskItem
