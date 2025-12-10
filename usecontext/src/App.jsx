// import { createContext, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import ChildA from './components/childA'

// // step1 : creating context
// const userContext = createContext() ; 
// // step2 : wrap all the child inside the provider 
// // step3 : pass value 
// // step4 : consumer ke andar jake consume krr lo
// function App() {
//   const [count, setCount] = useState(0)

//   const [user ,setUser] = useState({
//     name : "love"
//   }) ; 


//   return (
//   <div>
//     <userContext.Provider value={user}>
//     <ChildA></ChildA>
//     </userContext.Provider>
    
//   </div>
//   )
// }

// export default App
// export {userContext}

import React, { createContext, useContext, useState } from 'react'
import ChildA from './components/childA';
const themeContext = createContext() ; 

const App = () => {
  const [theme ,setTheme] = useState("light") ; 

  
  return (
    <div>
      {
        theme === "dark" ? (
          <div>
            Background black
          </div>
        ) : (
          <div>
            Background white
          </div>
        )
      }
      <themeContext.Provider value={theme}>
      <ChildA></ChildA>
      </themeContext.Provider>
      
    </div>
  )
}

export default App
export {themeContext}