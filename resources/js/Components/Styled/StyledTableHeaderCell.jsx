import React from 'react'

const StyledTableHeaderCell = ({children}) => {
  return (
    <th scope="col" className="px-6 py-3">
      {children}
    </th>
  )
}

export default StyledTableHeaderCell