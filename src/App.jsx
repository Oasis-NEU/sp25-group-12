import { useState } from 'react'
import './App.css'
import Tasks from './components/tasks'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div class="container">
      <Tasks />
    </div>
  )
}

export default App
