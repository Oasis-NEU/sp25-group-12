import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Tabs() {
  const [count, setCount] = useState(0)

  return (
    <>
      {
      <!-- Tab links -->
      <div class="tab">
        <button class="tablinks" onclick="openCity(event, 'Class 1')">Class1</button>
        <button class="tablinks" onclick="openCity(event, 'Class 2')">Class2</button>
        <button class="tablinks" onclick="openCity(event, 'Class 3')">Class3</button>
      </div>
      
      <!-- Tab content -->s
      <div id="Class 1" class="tabcontent">
        <h3>London</h3>
        <p>London is the capital city of England.</p>
      </div>
      
      <div id="Class 2" class="tabcontent">
        <h3>Paris</h3>
        <p>Paris is the capital of France.</p>
      </div>
      
      <div id="Class 3" class="tabcontent">
        <h3>Tokyo</h3>
        <p>Tokyo is the capital of Japan.</p>
      </div>
      
      
      /* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default Tabs
