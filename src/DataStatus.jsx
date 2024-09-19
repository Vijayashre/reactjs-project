import React,{useEffect,useState} from "react";

function DataStatus(){
      const [data, setData] = useState([]); 
      const [search, setSearch] = useState('');
      const [filteredData, setFilteredData] = useState([]); 

    
      useEffect(() => {
        const fetchTodos = async () => {
          try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos/');
            const result = await response.json();
            setData(result); 
            setFilteredData(result);
          } catch (error) {
           // setError(error.message);
          } finally {
            //setLoading(false);
          }
        };
    
        fetchTodos(); 
      }, []);
    
      useEffect(() => {
        const query = search.trim();
    if (query === '') {
        setFilteredData(data);
    } else {
      const filtered = data.filter(todo => {
        const idMatch = todo.id === parseInt(query, 10);
        const titleMatch = todo.title.toLowerCase().includes(query.toLowerCase());
        return idMatch || titleMatch; 
      });
      setFilteredData(filtered);
    }
  }, [search, data]); 
    
      return (
        <div>
          <h1>Todo List Search</h1>
          <input
            type="text"
            placeholder="Search Todos"
            value={search}
            onChange={e => setSearch(e.target.value)}/>
    
         
            <table>
                <thead>
                    <tr>
                        <th></th>
                    </tr>
                </thead>
         
              {filteredData.map(todo => (
                <li key={todo.id}>
                  {todo.title} - {todo.completed ? 'Completed' : 'Incomplete'}
                </li>
              ))}
              </table>
           
         
        </div>
      );
    }
    
export default DataStatus;