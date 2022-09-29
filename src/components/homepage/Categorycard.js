import React from 'react'

function Categorycard({name}) {
    return (
        <div className="capitalize cursor-pointer min-w-max py-2 px-4
         rounded-lg shadow-sm border-2 text-center m-1
          dark:text-gray-200 hover:shadow-lg transition-transform transform hover:-translate-y-1"> 
            <p className="text-mb">{name}</p>
        </div>
    )
}

export default Categorycard;
