import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'
const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitList, setVisitedList] = useState([]);    
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json()) 
        .then(data =>{
            setCountries(data)
            // console.log(data)
        })
    },[])
    const handleVisitList =(visitedCountry)=>{
        console.log('Mark as Visit')
        const newVisitedCountry = [...visitList , visitedCountry];
        setVisitedList(newVisitedCountry)

      
    }
    return (
        <div style={{
            display: 'grid',
            gap:' 20px',
            alignContent: 'center',
            justifyContent: 'center',
            margin: '10px 20px 10px 20px',
            textAlign: 'center'
        }}>
            <h2>Countries: {countries.length} Countries</h2>  
            <div>
                <h3>Visited Country: {visitList.length}</h3>
                  {visitList.map(list => <p>{list}</p>)}
                </div> 
          <div className="countries">
          {
                countries.map(country => <Country key={country.cca3} country={country} handleVisitList={handleVisitList}></Country>)
            }
          </div>
        </div>
    );
};

export default Countries;