import React, { useEffect, useState } from 'react';
import './Countries.css'
import './Countries'
import Country from '../Country/Country';
const Countries = () => {
    const [countries,setCountries] = useState([])
    useEffect(()=>{
   fetch('https://restcountries.com/v3.1/all')
   .then(res=>res.json())
  .then(data => setCountries(data))
    },[])
    return (
        <div >
            <h2>Hello from countries</h2>
            <p>Available Countries : {countries.length}</p>
           <div className="countries">
           {
            countries.map(country=><Country country={country} ></Country>)
            }
           </div>
        </div>
    );
};

export default Countries;