import { useState } from "react"
import axios from "axios"

function Weather() {
    const [city, setcity] = useState("")
    const [weather,setweather] = useState("")
    const [temp,settemp] = useState("")
    const [desc,setdesc] = useState("")

    function handleCity(evt) {
        setcity(evt.target.value)
    }

    function getWeather() {
        var weatherData = axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=02e57bcdcabb93866c1574e12beff4b4`)

        weatherData.then(function (success) {
            console.log(success.data)
            setweather(success.data.weather[0].main)
            setdesc(success.data.weather[0].description)
            settemp(success.data.main.temp)
        })
    }

    return (
        <div className="bg-yellow-600 p-20">
            <div className="bg-blue-950 p-10 text-white rounded-md">
                <h1 className="text-2xl font-medium text-white">Weather Report</h1>
                <p>I can give you a weather report about your city !</p>
                <input onChange={handleCity} type="text" className="mt-2 text-black border border-black rounded-md p-2" placeholder="Enter your city name"></input>
                <button onClick={getWeather} className="bg-yellow-500 text-black p-2 rounded-md- mt-2">Get Report</button>

                <div className="mt-2 text-white">
                    <h1><b>Weather:</b>{weather}</h1>
                    <p><b>Temperature:</b>{temp}</p>
                    <p><b>Description:</b>{desc}</p>
                </div>
            </div>
        </div>
    )
}

export default Weather