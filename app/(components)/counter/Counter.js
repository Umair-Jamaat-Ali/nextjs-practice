'use client'
import { useState } from 'react';

const Counter = () => {

    const [count, setCount] = useState(0);
   
   
    const decrementHandler = ()=>{
        if (count > 0 ) {
            setCount(count - 1);
           } 
    }

    const incrementHandler = () => {
        setCount(count + 1);
    }


    return (
        <div>
            <button className='w-[110px] h-[50px] bg-slate-400 m-5' onClick={decrementHandler}>-</button>
            <div className='w-[150px] h-[80px] border-2 border-black text-center pt-5 '>{count}</div>
            <button className='w-[110px] h-[50px] bg-slate-400 m-5' onClick={incrementHandler}> + </button>
            {count !== 0 && <button className='w-[110px] h-[50px] bg-slate-400 m-5' onClick={()=> setCount(0)}>reset</button>}
            
        </div>
    );
}

export default Counter;
