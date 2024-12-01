"use client"
import {useState} from 'react'

const State = () => {
     const [count, setCount] = useState(0)
     const handleIncrement = () => {
        setCount(count + 1)
     }   
     const handleDecrement = () => {
        setCount(count - 1)
     }   
     const handleReset = () => {
        setCount(0)
     }   

  return (
    <div className='container mt-28'>
    <h1 className='text-center mb-12 text-4xl font-extrabold underline'>Counter</h1>
    <h2 className='text-7xl text-center mb-16'>{count}</h2>
    <div className='flex justify-center'>
    <button className='border bg-black py-5 px-10 text-white font-semibold mx-10' onClick={handleIncrement}>
        Increment</button>
    <button className='border bg-black py-5 px-10 text-white font-semibold mx-10' onClick={handleDecrement}>
        Decrement</button>
    <button className='border bg-black py-5 px-10 text-white font-semibold mx-10' onClick={handleReset}>
        Reset</button>
    </div>  
    </div>
  )
}

export default State;
