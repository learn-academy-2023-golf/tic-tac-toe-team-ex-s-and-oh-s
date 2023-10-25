import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))

  const [next, setNext] = useState(false)
  console.log(squares)

  const reset = () => {
    setSquares(Array(9).fill(null))
  }

  if (squares[0] !== null && squares[1] !== null && squares[2] !== null && squares[3] !== null && squares[4] !== null && squares[5] !== null && squares[6] !== null && squares[7] !== null && squares[8] !== null ) {
    alert("game over")
    reset()
  } 

  function calculateWinner(squares) {
      const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
      for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
          alert(`${squares[a]}  is the winner`)
          reset()
          return squares[a];
        }
        
      }
      return null;
    }


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


    calculateWinner(squares)
  }
  // function calculateWinner(squares) {
  //   const lines = [
  //     [0, 1, 2],
  //     [3, 4, 5],
  //     [6, 7, 8],
  //     [0, 3, 6],
  //     [1, 4, 7],
  //     [2, 5, 8],
  //     [0, 4, 8],
  //     [2, 4, 6],
  //   ];
  //   for (let i = 0; i < lines.length; i++) {
  //     const [a, b, c] = lines[i];
  //     if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
  //       return squares[a];
  //     }
  //   }
  //   return null;
  // }

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