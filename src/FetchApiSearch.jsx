import { useEffect, useState } from "react";

function FetchApiSearch(){
const [data,setData] = useState([]);
const[filtered,setFiltered]=useState([]);
const [search,setSearch]= useState("");
const[error,setError]= useState("");
const[loading,setLoading]=useState(false);

useEffect(()=>{
    const fetchData=async()=>{
        setLoading(true);
        try{
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            const result = await response.json();
            setData(result);
            setFiltered(result);
        }catch(error){
            setError("Error");
        }finally{
            setLoading(false);
        }
    }
    fetchData();
},[]);
useEffect(()=>{
let query = search.trim();
if(query === ""){
    setFiltered(data);
}else{
    let filteredData = data.filter((show)=>{
        const idMatch = show.id === parseInt(query,10);
        const titleMatch = show.title.toLowerCase().includes(query.toLocaleLowerCase());
        return idMatch || titleMatch;
    })
    setFiltered(filteredData);
}
},[search,data]);
if(error)return(<div>Error....</div>)
if(loading)return(<div>loading....</div>)
return(
   
    <div>
    <label>Search : <input  type="text" value={search} onChange={(e)=>setSearch(e.target.value)}/></label>
        <table>
            <head>
                <tr>
                    <th>Id</th>
                    <th>UserId</th>
                </tr>
            </head>
            {filtered.map((item)=>{
                return(
                    <tbody>
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                        </tr>
                    </tbody>
                )
            })}
        </table>
    </div>
)
}
export default FetchApiSearch;