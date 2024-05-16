import {useState} from "react";
function ShowText(){
const [count , setCount] = useState("");

// const onhandler = () =>{
//     setCount(count + 1);
// }
const addText = (e) =>{
    setCount(e.target.value);
}
return(
    <div>
       
        {/* <input value={count} onChange={addText}/> */}

        <label>Enter your department:
        <select value={count}  onChange={addText}> 
            <option  value="IT">IT</option>
            <option  value="CS">CS</option>
            <option value="DS">DS</option>
            <option value="VS">VS</option>
        </select>
       
        {/* <input 
          type="text" 
          value={data.department}
          name="department"
          onChange={updateValue}
        /> */}
      </label>
        <button onClick={count}>Submit</button>
        <p> {count}</p>
       
    </div>
)
}
export default ShowText;