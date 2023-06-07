import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='bg-white dark:bg-[#1e1e1e]'>
      <RouterProvider router={router}/>
    </div>
  </React.StrictMode>,
)
