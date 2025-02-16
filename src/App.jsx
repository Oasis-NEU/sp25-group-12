import { useState } from 'react'
import './App.css'
import Tasks from './components/tasks'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Tasks />
  )
}

export default App
