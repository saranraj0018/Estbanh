import React from 'react'

const StyledTableRow = ({children}) => {
  return (
    <tr className="bg-white border-b   border-gray-200 hover:bg-gray-50">{children}</tr>
  )
}

export default StyledTableRow