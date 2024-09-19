import React,{useRef} from "react";

function UseRefernce(){
    const focusPoint = useRef(null);
 const onHandleref =()=>{
 focusPoint.current.value = "Hello Vijaya";
 focusPoint.current.focus();
 }

 return(
    <div>
        <button onClick={onHandleref}>Click Me</button>
        <input ref={focusPoint}/>
    </div>
 )
}
export default UseRefernce;