import React from 'react'

const TaskLayout = ({ children }) => (
  <div
    style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      paddingTop: 60,
    }}
  >
    <div
      style={{
        background: '#fff',
        borderRadius: 16,
        boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
        padding: 32,
        minWidth: 350,
      }}
    >
      {children}
    </div>
  </div>
)

export default TaskLayout
