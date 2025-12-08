import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment ,reset ,incrementByAmount} from './features/counter/counterSlice'

function App() {
  
const [amount ,setAmount] = useState(0) ; 
  const count = useSelector((state) => state.counter.value) ;
  
  const dispatch = useDispatch() ; 

  function handleIncrementClick() {
    dispatch(increment())
  }
  function handledecrenmentClick(){
    dispatch(decrement())
  }

  function resethandler(){
    dispatch(reset())
  }

  function incrementbyamount() {
    dispatch(incrementByAmount(amount))
  }

  return (
   <div>
    hello abiral
    <button onClick={handleIncrementClick}>Increment</button> 
    <p>count :{count} </p>
    <button onClick={handledecrenmentClick}>decrenment</button>
    <button onClick={resethandler}>
      reset
    </button>
    <input type="number" 
    value = {amount} 
    placeholder='enter amount'
    onChange={(e) => setAmount(e.target.value)}
    />
    <button onClick={incrementbyamount}>increment by amount</button>
   </div>
  )
}

export default App
