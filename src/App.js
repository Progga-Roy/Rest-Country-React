
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
  <div className='country'>
    <p>Available Countries : {countries.length}</p>
    {
      countries.map(country=> <Country name={country.name.common} flags={country.flags.png} region={country.region}  population={country.population}></Country>)
    }
  </div>
)
}

function Country(props){
return (
  <div className='single-country'>
    <h3>Name: {props.name}</h3>
    <img src={props.flags} alt="" />
    <h4>Continent : {props.region}</h4>
    <p>Population :{props.population}</p>
  </div>
)
}
export default App;
