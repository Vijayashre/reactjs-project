//table.jsx

import React, { useState } from 'react';

function StudentForm(props) {
	const [name, setName] = useState('');
	const [city, setCity] = useState('');

	const changeName = (event) => {
		setName(event.target.value);
	};

	const changeCity = (event) => {
		setCity(event.target.value);
	};
	const [department , setDepartment] = useState("");
    const handleChange = (e) => {
        setDepartment(e.target.value);
    }
   
	const transferValue = (event) => {
		event.preventDefault();
		const val = {
			name,
			city,
			department,
		};
		props.func(val);
		clearState();
	};

	const clearState = () => {
		setName('');
		setCity('');
		setDepartment('');
	};

	return (
		<div>
			<label>Name</label>
			<input type="text" value={name} onChange={changeName} />
			<label>City</label>
			<input type="text" value={city} onChange={changeCity} />
			<label>Enter your department:</label>
			<select value={department}  onChange={handleChange}> 
				<option name="department"  value="IT">IT</option>
				<option name="department" value="CS">CS</option>
				<option name="department"value="DS">DS</option>
				<option  name="department" value="VS">VS</option>
			</select>
			<button onClick={transferValue}> Click Me</button>
		</div>
	);
}

export default StudentForm;
