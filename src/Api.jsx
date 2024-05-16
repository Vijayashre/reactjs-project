import { useEffect, useState } from "react";


function Api(){
    const [isShow , setShowData] = useState();

    useEffect(() => {
        fetch("https://dummyjson.com/products")
        .then((res) => res.json())
        //.then((isShow) => console.log(isShow));
        .then((isShow) => setShowData(isShow.products));
    },[])

    return(
<div>
    {isShow?.map((item) =>{
        if(item.id <=3 ){
        return(
            <div key={item.id}>
                <p>{item.id}</p>
                <p>{item.description}</p>
            </div>
        );
        }
    })}
</div>
    );


}
export default Api;