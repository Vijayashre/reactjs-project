import { useState,useEffect } from "react";
import axios from 'axios';
function App() {
  const [APIData, setAPIData] = useState([])
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [sortDirection, setSortDirection] = useState('asc');

  useEffect(() => {
      axios.get(`https://mocki.io/v1/f081c12f-83cd-49ea-8b91-3b4c5c82d92c`)
          .then((response) => {
              setAPIData(response.data);
          })
  }, [])


  function sortByTitle(direction) {
    setSortDirection(direction);
    const sortedProducts = [...APIData].sort((a, b) => {
      if (direction === 'asc') {
        return a.offer.localeCompare(b.offer);
      } else {
        return b.offer.localeCompare(a.offer);
      }
    });
    setAPIData(sortedProducts);
  }
  //localeCompare giving error so thats what i am using this 
  const searchItems = (searchValue) => {
      setSearchInput(searchValue)
      if (searchInput !== '') {
          const filteredData = APIData.filter((item) => {
              return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
          })
          setFilteredResults(filteredData)
      }
      else{
          setFilteredResults(APIData)
      }
  }
  return (
    <div  className="container">
    <div className="MaxContainer">

      <div className="Sorting">
      <select className="sortBtn">
        <option>All </option>
        <option>All </option>
      </select>
      <select className="sortBtn" id="sort-direction" onChange={e => sortByTitle(e.target.value)}>
        <option value="asc">Sort</option>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
      </div>
      <div className="" style={{ marginTop: 20}}>
        <div className="card-grid ">
          
        {APIData.map(item => (
          <div key={item.id} className="titleA">
             <div className="discount_price">{item.offer}
             </div>
                <div className="cardDP">
                <div  className="title">
                  <div className="title">{item.category}</div>
                  <div className="title-sub">{item.title}</div>
                </div>
                <div className="Image">
                  <img className="card-image" src={item.image}/>
                  </div>
                    <div className="titleName">
                    <span className="priceStart">Starting from</span>
                    <p className="priceStart">BD -<span className="title-sub">{item.price}</span> /mo</p>
                    <div className="priceStart">Full Price BD: <span className="title-sub"> {item.discount_price}</span></div>
                    </div>
                    <div className="btnwrap">
                    Buy this Device</div>
               </div>
             
          </div>
        ))}
      </div>
    </div>
    </div>
    </div>
   
    
  );
}

export default App;