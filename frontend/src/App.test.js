import { render, screen } from '@testing-library/react'
import App from './App'

test('başlık görünüyor', () => {
  render(<App />)
  const titleElement = screen.getByText(/task manager/i)
  expect(titleElement).toBeInTheDocument()
})
