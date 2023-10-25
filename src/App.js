import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))

  const [next, setNext] = useState(false)
  console.log(squares)

  const handleClick= (i) => {
    if (squares[i] === null) {
      if (next === false) {
        squares[i] = "x"
      } else if (next === true) {
        squares[i] = "o"
      }
    }
    
    
    setSquares([...squares])
    console.log(squares[i])
    setNext(prev => !prev)
    console.log(next)
  }

  return (
    <>
      <h1>Tic Tac Toe</h1>

      <div className='square-container'>
        <Square value={squares[0]} handleClick={()=> handleClick(0)} />
        <Square value={squares[1]} handleClick={()=> handleClick(1)}/>
        <Square value={squares[2]} handleClick={()=> handleClick(2)}/> 
        </div>

        <div className='square-container'>
        <Square value={squares[3]} handleClick={()=> handleClick(3)}/>
        <Square value={squares[4]} handleClick={()=> handleClick(4)} />
        <Square value={squares[5]} handleClick={()=> handleClick(5)}/>
        </div>

        <div className='square-container'>
        <Square value={squares[6]} handleClick={()=> handleClick(6)}/>
        <Square value={squares[7]} handleClick={()=> handleClick(7)} />
        <Square value={squares[8]} handleClick={()=> handleClick(8)}/>
        </div>

    </>
  )
}

export default App