import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Pages/Home/Home/Home'

function App() {
  const [count, setCount] = useState('Light')

  useEffect(()=>{
    if(count=== 'dark'){
      document.documentElement.classList.add("dark");
    }
    else{
      document.documentElement.classList.remove("dark");
    }
  },[count])

  const hanldeThem = ()=>{
    setCount(count === "dark" ? "Light" : "dark");
  }

  return (
    <>
      <div className=''>
        <a href="https://vitejs.dev" >
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" >
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className='mt-20'>Vite + React</h1>
      <div className="card">
        <button onClick={hanldeThem}>
          count is 
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs dark:text-white">
        Click on the Vite and React logos to learn more
      </p>
      <Home/>
    </>
  )
}

export default App
