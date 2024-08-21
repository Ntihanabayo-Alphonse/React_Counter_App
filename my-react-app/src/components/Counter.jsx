import React from 'react'
import useCounterStore from '../stores/useCounterStore';

function Counter() {
    const { count, increment, decrement, reset } = useCounterStore();

    return (

        <div className='counter_parent'>

            <span className='counter'>{count}</span>

            <div>
                <button className='decrement_btn' onClick={decrement}>Decrement</button>
                <button className='reset_btn' onClick={reset}>Reset</button>
                 <button className='increment_btn' onClick={increment}>Increment</button>
            </div>
        </div>

    );
}

export default Counter;