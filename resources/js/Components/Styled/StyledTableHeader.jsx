import React from 'react'

const StyledTableHeader = ({children}) => {
  return (
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
        {children}
    </thead>
  )
}

export default StyledTableHeader