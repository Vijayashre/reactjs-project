import { useRef, useState } from "react";

function Timer(){
   const [timer,setTime] = useState(0);
   const [running,setRuming] = useState(false);
   const timeRef = useRef(null);

   const startTime =()=>{
    if(!running){
        setRuming(true);
        timeRef.current = setInterval(()=>{
            setTime((pre) => pre + 1);
        },100);
    }
   }
   const stopTimer =()=>{
    setRuming(false);
    clearInterval(timeRef.current);
   }
   const clearTimer =()=>{
    setRuming(false);
    clearInterval(timeRef.current);
    setTime(0);
   }
return(
    <div>
        <h1>{timer}</h1>
        <button onClick={startTime}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={clearTimer}>Clear</button>
    </div>
)
}
export default  Timer;