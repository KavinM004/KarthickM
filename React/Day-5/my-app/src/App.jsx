import {useState,useEffect} from 'react'
import './App.css'
import UseEffec from './UseEffec'
function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(()=>{
    async function fetchingData(){
      const apiUrl="https://restcountries.com/v3.1/all";
      try {
        const response=await fetch(apiUrl);
        const data=await response.json();
        for(var i=0;i<data.length;i++){
          setData(data[i].currencies);
      }
      } catch (err) {
        setError(err);
      }finally{
        setLoading(false);
      }
    }
    fetchingData();
  },[]);
  if(loading){
    return <div>loading...</div>
  }
  if(error){
    return <div>Error : {error.message}</div>
  }
  return (
    <>
      <p>{data}</p>
    </>
  )
}

export default App
