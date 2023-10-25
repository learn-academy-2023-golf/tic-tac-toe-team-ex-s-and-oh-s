import React from 'react'

const Square = (props) => {
  return (
    <div onClick={() => props.handleClick()} className="square">{props.value}</div>
  )
}
export default Square
