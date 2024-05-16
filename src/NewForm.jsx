import {useState} from "react";

function NewForm(){
    const[data ,setData] = useState({
        name : '',
        date : '',
    });
    const[form,setForm] = useState({
        name : '',
        date : '',
    });
    const [submit , setSubmit] = useState(false);
    
    const submitValue =(e) => {
        e.preventDefault();
        setForm({
            name : data.name,
            date : data.date,
        });
        setSubmit(true);
    }

    const updateValue =(e) => {
        const{name,value} = e.target;
        setData((data) => ({
            ...data,
            [name] : value,
        }))
    }

    return(
<form onSubmit={submitValue}>
    <input 
    name="name"
    type="text"
    value={data.name}
    onChange={updateValue}
    />
    <input 
    name="date"
    type="text"
    value={data.date}
    onChange={updateValue}
    />
    <button onClick={updateValue}>Submit</button>
    <p>{form.name}</p>
    <p>{form.date}</p>
</form>

    );

}
export default NewForm;