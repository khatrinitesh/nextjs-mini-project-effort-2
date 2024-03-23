"use client"
import {useState} from 'react'

const Counter = ({styleCounter}) => {
    const [count,setCount] = useState(0);
  return (
    <div className={`${styleCounter}`}>
      <button onClick={() => setCount(prev => prev +1)}>You have clicked this {count} times.</button>
    </div>
  )
}

export default Counter
