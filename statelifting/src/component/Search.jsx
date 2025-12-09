import React from 'react'

const Search = ({query ,setQuery}) => {
  return (
    <div>
        <input type="text" onChange={(e) => setQuery(e.target.value)}/>
    </div>
  )
}

export default Search