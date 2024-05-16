import axios from "axios";
import  {useState,useEffect} from "react";
function FetchApi(){

    const [apiData , setApiData] = useState();

    useEffect(() =>{
        axios.get("https://dummyjson.com/products")
        .then((res) => res.json())
        .then((apiData) => setApiData(apiData.products));
       // .then((apiData) => console.log(apiData));
    },[]);

    return(
        <div>
            {apiData?.map((item) =>{
                return(
                    <div key={item.id}>
                    <p>{item.id}</p>
                </div>
                )
               
            })}
        </div>

    );

}
export default FetchApi;