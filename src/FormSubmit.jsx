import React, {useState} from 'react';
function FormSubmit(){
    const[data , setData] = useState({
        username: ' ',
        department : '',
        mailId: ' ',
        registno: ' ',
       
    });
    const [form ,setForm] = useState({
        username: ' ',
        department : '',
        mailId: ' ',
        registno: ' ',
      
    });
    const [department , setDepartment] = useState("");
    const handleChange = (e) => {
        setDepartment(e.target.value);
    }
   
 const[submit ,submitForm] = useState(false);
 const submitValue= (e) => {
    e.preventDefault();
    setForm({
        username : data.username,
        department :data.department,
        mailId : data.mailId,
        registno : data.registno,
       
    });
    submitForm(true);
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
        <select value={department}  onChange={handleChange}> 
            <option name="department"  value="IT">IT</option>
            <option name="department" value="CS">CS</option>
            <option name="department"value="DS">DS</option>
            <option  name="department" value="VS">VS</option>
        </select>
        {/* <input 
          type="text" 
          value={data.department}
          name="department"
          onChange={updateValue}
        /> */}
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
        {department}
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
export default FormSubmit;