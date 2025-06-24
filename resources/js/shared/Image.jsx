import React from 'react'

const Image = ({source, width='50px', height='50px'}) => {
  return (
    <img src={source} className={`w-[40px] h-[40px] rounded-full object-cover mix-blend-multiply`} />
  )
}

export default Image