import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './counterSlice'

const Counter = () => {
    const count = useSelector(state => state.counter.value)
    const dispatch = useDispatch()

  return (<>
    <div>
        <button aria-label='Increment value' onClick={() => dispatch(increment())}>+</button>
        <span>{count}</span>
        <button aria-label='Decrement value' onClick={() => dispatch(decrement())}>-</button>
    </div>
  </>)
}

export default Counter