import React, { useContext } from 'react'
import { themeContext } from '../App'

const ChildB = () => {
    const theme = useContext(themeContext) ;

    // theme = "light"
  return (
    <div>
        class {theme}
    </div>
  )
}

export default ChildB