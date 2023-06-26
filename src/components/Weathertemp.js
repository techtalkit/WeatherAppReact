import React, { useState, useEffect } from 'react'
import './css/style.css'

const Weathertemp = () => {
    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Mumbai");
    useEffect(() => {
        const fetchApi = async () => {
            const apiId = "a2a132c7da0bb72954c6147d90117ad6";
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=${apiId}`;
            const response = await fetch(url);
            const responseJson = await response.json();
            console.log(responseJson);
            setCity(responseJson.main)
            console.log(city);
        }
        fetchApi();
    },[search])
    return (
        <>
            <div className='box'>
                <div className='inputData'>
                    <input type="search" value={search} onChange={(event) =>{setSearch(event.target.value)}} className="inputField" />
                </div>
                {
                    !city ? (
                        <p className='errorMsg'>No Data Found!</p>
                    ) : (
                        <div>
                            <div className="info">
                                <h2 className="location">
                                    <i className="fa fa-street-view" style={{ fontSize: "36px" }}></i>
                                    {search}
                                </h2>
                                <h1 className="temp">
                                    {city.temp}°C
                                </h1>
                                <h3 className="tempmin_max">Min: {city.temp_min}°C | Max : {city.temp_max}°C</h3>
                            </div>
                            <div className="wave -one"></div>
                            <div className="wave -two"></div>
                            <div className="wave -three"></div>
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default Weathertemp