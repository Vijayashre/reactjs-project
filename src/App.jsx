import { useState } from "react";


function App() {
    const[data , setData] = useState({
        username: ' ',
        mailId: ' ',
        registno: ' ',

    });
    const [form ,setForm] = useState({
        username: ' ',
        mailId: ' ',
        registno: ' ',

    });
    const [selectedValue, setSelectedValue] = useState('');
    const [displayValue, setDisplayValue] = useState('');
  
    const handleSelectChange = (event) => {
      setSelectedValue(event.target.value);
    };
 const submitValue= (e) => {
    e.preventDefault();
    setForm({
        username : data.username,
        mailId : data.mailId,
        registno : data.registno,

    });
    setDisplayValue(selectedValue);
 }

 const updateValue = (e) => {
    const { name, value } = e.target;
    setData((data) => ({
        ...data,
        [name]: value,
        
      }));
    
 };
 return (
    <div>
    <form onSubmit={submitValue}>
      <label>Enter your name:
        <input 
          type="text" 
          value={data.username}
          name="username"
          onChange={updateValue}
        />
      </label>
      <br/>
      <br/>
      <label>Enter your department:
        <select   onChange={handleSelectChange}> 
            <option>Select</option>
            <option   value="IT">IT</option>
            <option value="CS">CS</option>
            <option  value="DS">DS</option>
            <option  value="VS">VS</option>
        </select>
      </label>
      <br/>
      <br/>
      <label>Enter your mailId:
        <input 
          type="text" 
          value={data.mailId}
          name="mailId"
          onChange={updateValue}
        />
      </label>
      <br/>
      <br/>
      <label>Enter your registno:
        <input 
          type="text" 
          value={data.registno}
          name="registno"
          onChange={updateValue}
        />
      </label>
      <br/>
      <br/>
      <button onClick={updateValue}>Submit</button>
    </form>
    <table>
        <tr>
            <th>UserName</th>
            <th>department</th>
            <th>mailId</th>
            <th>registno</th>
        </tr>
        <tr>
        <td>
        {form.username}
        </td>
        <td>
        {displayValue}
        </td>
        <td>
        {form.mailId}
        </td>
        <td>
        {form.registno}
        </td>
        </tr>

        </table>
    </div>
  )
}
  export default App;