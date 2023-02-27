import React, { useEffect, useState } from "react";
import './Weather.css';

const Weather = () => {
    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Delhi");//whatever user is searching
    useEffect(() => {
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=abb7a76bc385d207603df35940e0ea98`;
            const response = await fetch(url);
            // console.log(response);
            const resJson = await response.json();
            // console.log(resJson.main);
            setCity(resJson.main);//setCity has response data
        }
        fetchApi();
    }, [search])//[search] this means that whenever setSearch value will be changed useEffect will be called 
    return (
        <div className="Weather-box ">
            <div >
                <div className="inputData">
                    <input type="search" className="inputFeild" placeholder=" Search for a City..." onChange={(event) => { setSearch(event.target.value) }} />
                </div>
            </div>
            {
                !city ?
                    (<div ><p className="errorMessage">No Such City Found...</p></div>) : (
                        <div className="info">
                            <h1 className="location">
                                <i className="fa-solid fa-street-view" style={{ color: "#eccc68", fontSize: "4rem" }}></i>  {search}
                            </h1>
                            <h1 className="temp"><i className="fa-solid fa-temperature-three-quarters" style={{ color: "red", fontSize: "4rem" }}></i> {city.temp} °C</h1>
                            {/* <h3 className="tempmin_max">Min: {city.temp_min}°C  | Max: {city.temp_max}°C</h3> */}
                            <h3 className="feels_like">Feels Like: {city.feels_like} °C</h3>
                            <h3 className="humidity"> Humidity: {city.humidity} %</h3>
                            <h3 className="pressure">Pressure: {city.pressure} mb</h3>
                        </div>
                    )
            }
        </div >
    );
}
export default Weather;