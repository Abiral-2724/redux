import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Course from './components/Course';
import Student from './components/Student';
import Notfound from './components/Notfound';


const router = createBrowserRouter([
  {
    path : '/' ,
    element : <div>
      <Navbar></Navbar>
      <Home></Home>
    </div>
  } ,
  {
    path : '/about' ,
    element :  <div>
    <Navbar></Navbar>
   <About></About>
  </div> ,
  children : [
    {
      path:'course' ,
      element : <Course></Course>
    } ,
    {
      path : 'student' ,
      element : <Student></Student>
    }
  ]

  } , 
  {
    path : '/student/:id' , 
    element : <div>
      <Navbar></Navbar> 
      <Dashboard></Dashboard>
    </div>
  } ,{
    path : '*' ,
    element : <Notfound></Notfound>
  }
])

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
   <RouterProvider router={router}></RouterProvider>

    </div>
  )
}

export default App
