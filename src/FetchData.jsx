import React,{useEffect,useState} from "react";

function FetchData(){
const [datas,setData] = useState([]);
const [error,setError] = useState("");
const[loading,setLoading] = useState(false);


    const fetchApi = async()=>{
        setLoading(true);
        try{
            const res = await fetch("https://api.restful-api.dev/objects");
            const result =  await res.json();
            setData(result);
        }catch(error){
            setError("Error");
        }finally{
            setLoading(false);
        }
    }
   
if(error)return(<div>Error .....</div>)
if(loading)return(<div>Loading .....</div>)
return(
   
    <div>
     <button onClick={fetchApi}>Click ME</button>
        {datas.map((item,index)=>{
            return(
                <div key={index}>
                <table>
                <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                {item.data && (
               
                <tr>
               <td> {item.data.color}</td>
                <td>{item.data.capacity}</td>
               </tr>
             )}
                </tr>
                </table>
                
              
                </div>
            )
        })}
    </div>
)
}
export default FetchData;