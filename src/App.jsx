import { useState,useEffect } from "react";
import axios from 'axios';
function App() {
  const [APIData, setAPIData] = useState([])
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  useEffect(() => {
      axios.get(`https://mocki.io/v1/f081c12f-83cd-49ea-8b91-3b4c5c82d92c`)
          .then((response) => {
              setAPIData(response.data);
          })
  }, [])


  //localeCompare giving error so thats what i am using this 
  const searchItems = (searchValue) => {
      setSearchInput(searchValue)
      if (searchInput !== '') {
          const filteredData = APIData.filter((item) => {
              return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
              //.sort((a, b) => (isAscending ? a.localeCompare(b) : b.localeCompare(a)));
          })
          setFilteredResults(filteredData)
      }
      else{
          setFilteredResults(APIData)
      }
  }



  return (
    <div className="MaxContainer">
      <label className="title" style={{paddingRight: 10}}> Filter by Name :  </label>
      <input icon='search'
                placeholder='Search...'
                onChange={(e) => searchItems(e.target.value)}
            />
            
      <div>
             <div className="mainDiv" style={{ marginTop: 20}}>
                {searchInput.length > 1 ? (
                    filteredResults.map((item) => {
                        return (
                            <div>
                              <select id="sortDropdown" value={selectedOption}  onChange={(e) => searchItems(e.target.value)}>
                              <option key={item} value={item.value}>
                                  {option.label}
                                </option>
                              </select>
                            <div className="title" key={item.id}>
                              <div className="cardDP">
                              <div  className="title">
                              <div className="title">{item.category}</div>
                              <div className="title">{item.title}</div>
                              </div>
                              <div className="Image">
                                <img className="card-image" src={item.image}/>
                                </div>
                                <div className="titleName">
                                <span className="priceStart">Starting from</span>
                                <p>BD -{item.price} /mo</p>
                                {/* <p>{item.discount_price}</p> */}
                                  </div>
                                <div className="btnwrap">
                                Buy this Device</div>
                          </div>
                                </div>
                            </div>
                        )
                    })
                ) : (
                    APIData.map((item) => {
                        return (
                          <div>
                          <div key={item.id}>
                          <div className="cardDP">
                              <div  className="title">
                              <div className="title">{item.category}</div>
                              <div className="title">{item.title}</div>
                              </div>
                              <div className="Image">
                                <img className="card-image" src={item.image}/>
                                </div>
                                <div className="titleName">
                                <span className="priceStart">Starting from</span>
                                <p>BD -{item.price} /mo</p>
                                {/* <p>{item.discount_price}</p> */}
                                  </div>
                                <div className="btnwrap">
                                Buy this Device</div>
                          </div>
                          </div>
                      </div>
                        )
                    })
                )}
            </div>
    
     
    </div>
    </div>
    
  );
}

export default App;