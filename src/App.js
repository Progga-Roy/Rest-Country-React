
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Rest countries welcome back with React</h1>
      <LoadCountries></LoadCountries>
    </div>
  );
}

function LoadCountries(){
const [countries,setCountries] =useState([])
useEffect(()=>{
fetch('https://restcountries.com/v3.1/all')
.then(res=>res.json())
.then(data=>setCountries(data))

},[])

return (
  <div>
    <p>Available Countries : {countries.length}</p>
  </div>
)
}


export default App;
