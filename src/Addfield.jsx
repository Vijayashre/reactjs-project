import { useState } from "react";

const Addfield = () => {
  const [price, setPrice] = useState([]);
  const [count, setCount] = useState([1]);
  const [value, setValue] = useState("");

  const addnewtextfield = () => setCount((prev) => [...prev, prev + 1]);

  const addinputvalue = () => {
    setPrice(price.concat(value));
    console.log(price);
  };

  return (
    <div>
      <button onClick={addnewtextfield}>Add textfield</button>
      <br/>
      <br/>
      {count.map((item, i) => {
        <br />
        return (
          
          <input
            key={i}
            value={value}
            id={item.i}
            type="text"
            onChange={(e) => setValue(e.target.value)}
          />
          
        );
      })}
   <br/>
   <br/>
      <button onClick={addinputvalue}>Submit</button>
      <p>{price.value}</p>
    </div>
  );
};

export default Addfield;
