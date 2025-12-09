import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/card'
import Search from './component/Search'

function App() {
  const [count, setCount] = useState(0)
  const data = [
    {
      name : "abiral" ,
      desc : "Top 3 links of your best work (only share portfolio / hosted links). If team developed it, mention parts you worked on"
    } ,
    {
      name : "jain" ,
      desc : "Built complete frontend + major backend: authentication, Kanban board, tasks CRUD, real-time updates, file uploads, activity logs."
    } ,
    {
      name : "lavdhi" ,
      desc : "Developed post system, comments, user profiles, search, activity tracking, and integrated Clerk authentication."
    }
  ]
  const [query ,setQuery] = useState("") ; 
  const filterdata = data.filter((details) => details.name.toLowerCase().includes(query.toLowerCase()))
  
// create state
// manage state 
// change state 
// sabhi child m state ko sync karawa dege
// const [name ,setName] = useState("") ; 

  return (
    // <>
    // <h1>hello ji</h1>
    // <Card name={name} setName={setName}></Card>
    // <p>name value in page : {name}</p>
    // </>
    <>
    <Search query={query} setQuery={setQuery}></Search>
      {
        filterdata.map((d) => (
          
           <div>
             <p>
             {d.name}
            </p>
            <p>{d.desc}</p>
           </div>
          
        ))
      }
      hell
    </>
  )
}

export default App
