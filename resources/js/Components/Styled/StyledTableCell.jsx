import React from 'react'

const StyledTableCell = ({className, children}) => {
  return (
    <td className={`px-6 py-4 ${className}`}>{children}</td>
  )
}

export default StyledTableCell