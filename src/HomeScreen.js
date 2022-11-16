import React, {useState} from 'react'
 // import requests from '../request'
// import axios from '../Axios'
import axios from 'axios'

function HomeScreen(){

    const [data, setData] = useState({})
    const [location, setLocation] = useState('')
    
    // location is the query
        const baseUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=b30d7792ec0a36d005a1dcfe05f376ed` 
          
    
    // search bar 
    const searchLocation = (event) => { 
        if(event.key === 'Enter') { 
            axios.get(baseUrl)
        .then((res) => {
         setData(res.data)
         console.log(res.data)
        })
        }
    }
        
 

    return (
        <div className='home'>
        
        <div className='search--bar'>
            <input 
                value={location}
                onChange={event => setLocation(event.target.value)} // 
                onKeyPress={searchLocation} //
                placeholder='Enter Location'
            />
        </div>
        <div className='container--card'>
        <h3 className='temp'>{ data.main ? <p>{data.main.temp.toFixed()}°F </p>: null}</h3>
        <h1 className='location'>{data.name}</h1>
        <h3 className='high--temp'>{ data.main ? <p>High Temp: {data.main.temp_max.toFixed()} </p>: null}</h3>
        <h3 className='low--temp'> { data.main ? <p>Low Temp: {data.main.temp_min.toFixed()} </p>: null}</h3>

        </div>
        <div className='container--card--2'>
            <div className='column'>
        <h3 className='weather'>{data.weather ? <p>{data.weather[0].description}</p> : null}</h3>
        <h3 className='real--feel'>{ data.main ? <p>Real Feel: {data.main.feels_like.toFixed()}</p>  : null }</h3>
        <h3 className='humidity'>{ data.main ? <p className='p'>Humidity: {data.main.humidity} </p>: null}</h3>
        <h3 className='pressure'>{ data.main ? <p>Atmospheric pressure: {data.main.pressure} </p>: null}</h3>
        </div>
        </div>
        </div>
    )
}

export default HomeScreen;