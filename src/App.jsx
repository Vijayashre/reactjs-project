import { useState,useEffect } from "react";
import axios from "axios";

function App() {
const [data , setData] = useState();

useEffect(() => {
  axios.get('https://dummyjson.com/products')
  //.then((res) => res.json())
  .then((data) => setData(data.data.products));
 //.then((data) => console.log(data)); 

});
  return (
    <div>
      {data?.map((item) =>{
        if(item.id  <= 3){
          return(
            <div key={item.id}>
              <div>{item.id}</div>
                <img src={item.images}/>
                <p>{item.price}</p>
              </div>
               );
        }
      })}
   
    </div>
  );
}

export default App;
