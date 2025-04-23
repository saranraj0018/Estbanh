import React from 'react'

const StyledTable = ({children}) => {
  return (
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
        {children}
    </table>
  )
}

export default StyledTable