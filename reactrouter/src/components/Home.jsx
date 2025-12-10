import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate() ;
    const handleclick = () => {
navigate('/about')
    }
  return (
    <div>Home

        <button onClick={handleclick}>
            move to about page
        </button>
    </div>
  )
}

export default Home