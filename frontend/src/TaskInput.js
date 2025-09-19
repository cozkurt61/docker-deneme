import React from 'react'

const TaskInput = ({ input, setInput, onAdd }) => (
  <div style={{ display: 'flex', gap: 8, marginBottom: 24 }}>
    <input
      value={input}
      onChange={(e) => setInput(e.target.value)}
      placeholder="Yeni görev ekle"
      style={{
        flex: 1,
        padding: 10,
        borderRadius: 8,
        border: '1px solid #bdbdbd',
        fontSize: 16,
      }}
      onKeyDown={(e) => e.key === 'Enter' && onAdd()}
    />
    <button
      onClick={onAdd}
      style={{
        padding: '10px 18px',
        borderRadius: 8,
        background: '#1976d2',
        color: '#fff',
        border: 'none',
        fontWeight: 600,
        fontSize: 16,
        cursor: 'pointer',
      }}
    >
      Ekle
    </button>
  </div>
)

export default TaskInput
