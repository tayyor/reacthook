import React from 'react'

function Filter({handleSearch}) {
    return (
        <div>
            <input onChange ={handleSearch} 
                type="text" 
                placeholder = "search movie"/>
        </div>
    )
}

export default Filter
