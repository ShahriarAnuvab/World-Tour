import { useState } from 'react';
import './Country.css'
const Country = ({country, handleVisitList}) => {
    const [visited, countVisited]=useState(false)
    const visitHandler =()=>{
        countVisited(!visited)
        // console.log('clicked')
    }
    return (
        <div className= {`country ${visited && 'visited' }`}>
            <img src={country?.flags?.png ? country?.flags?.png : 'Not Found'} alt="" />
            <h3>Country Name: {country.name?.common}</h3>           
            <p>Offical Name: {country.name?.official}</p>           
            <p>Capital: {country?.capital}</p>           
            <p>Reigon: {country?.region}</p>           
            <p>Code: {country?.cca3}</p>           
            <p>Populaion: {country?.population}</p>           
            <p>Area: {country?.area}</p>           
            <p>Currencies: {country?.currencies?.EGP?.name ? country?.currencies?.EGP?.name : 'N/A'}, {country?.currencies?.EGP?.symbol ? country?.currencies?.EGP?.symbol : 'N/A'}  </p>       
            <button onClick={visitHandler}>{visited? 'Visited' : 'Will visit'}</button> 
            {visited? 'I have visited': 'I will visit'}   
            <button onClick={() => handleVisitList(country.name?.common)}>Add To Visited</button>
        </div>
    );
};

export default Country;