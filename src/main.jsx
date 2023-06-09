import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Routes'
import { Toaster } from 'react-hot-toast';
import AuthProvider from './Provider/AuthProvider'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <div className='bg-white dark:bg-[#1e1e1e]'>
          <RouterProvider router={router} />
          <Toaster />
        </div>
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>,
)
