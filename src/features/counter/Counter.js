import React from 'react'
import { useSelector, useDispatch }  from 'react-redux'
import { decrement, increment } from './counterSlice'
export function Counter(){
    const count= useSelector(state =>state.counter.value);
    const dispatch = useDispatch();

    return(
        <>
        <div>
            <button className="btn btn-info"
              aria-label="Increment value"
              onclick={()=>dispatch(increment)} />
               <span>{count}</span>
               <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        </div>
        </>
    )

    
}

