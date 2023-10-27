import {useEffect} from 'react';

export default function Timer({state , dispatch }) {

    //when using useEffect and if you need to flush any function or some cal some date at the unmouting or removal of the component then just return a function from the useEffect that will run the function at the unmount part 
    useEffect(()=>{
        const timer =  setInterval(() => {
             dispatch({action: "UPDATE_TIMER"})
         }, 1000);
 
         return  ()=> clearInterval(timer)
     },[])

    return (
        <div className="clock">
            {Math.floor(state.time/60)}:{(state.time%60 === 0) ? "00" :state.time%60 }
        </div>  

    )
}