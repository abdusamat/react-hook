import React  from 'react';
import './App.css';
import UsersList from './users/list'
import CounterFunction from './counters/function';
/*
function Customers() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetch('127.0.0.1:8000/customers')
      .then(response => response.json())
      .then(data => {
        setCustomers(data); // set customers in state
      });
  }, []); 
}
*/
export default function() {
     return (
         <div>
             <CounterFunction/>
             <UsersList/>
         </div>
    );
}