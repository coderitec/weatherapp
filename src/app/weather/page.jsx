"use client"

import Image from "next/image";
import React, { useState } from "react";

export default function Page() {
  const [searchCity, setSearchCity] = useState('');
  const [status, setStatus] = useState(null);
  const [error, setError] = useState(null);

  async function fetchWeather(city) {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=2c72a197d352308333129239c24f118a`, { cache: 'no-cache' });
      const data = await response.json();

      if (data.cod === "404") {
        setError(data.message);
      } else {
        setError(null);
        setStatus(data);
      }
    } catch (error) {
      console.error("Error fetching weather data: ", error);
      setError("Error fetching weather data");
    }
  }

  function onSubmit(e) {
    e.preventDefault();
    fetchWeather(searchCity);
  }

  return (
    <section className="h-screen bg-sky-400 flex items-center justify-center">
      <section className="grid md:grid-cols-2 grid-cols-1 gap-x-[100px]">
        <form onSubmit={onSubmit} className="flex flex-col gap-3">
          <input
            type="text"
            name="search"
            id="search"
            value={searchCity}
            className="p-5 rounded-[50px] outline-none"
            onChange={(e) => setSearchCity(e.target.value)}
            placeholder="Search for a city"
          />
          <button type="submit" className="bg-yellow-400 p-3 rounded-xl">
            Search
          </button>
        </form>
        {error ? (
          <h2>{error}</h2>
        ) : (
          status && (
            <aside>
              <p>Location: {status.name}</p>
              <p>Weather: {status.weather[0].main}</p>
              {status.weather[0].main === 'Rain' ? (
                <Image src="/status/rain.jpg" width={100} height={100} alt="rain" />
              ) : status.weather[0].main === 'Clouds' ? (
                <Image src="/status/cloud.jpg" width={100} height={100} alt="cloud" />
              ) : (
                ''
              )}
              <p>Description: {status.weather[0].description}</p>
              <p>Temperature: {(status.main.temp - 273.15).toFixed(2)} &#8451;</p>
              <p>Humidity: {(status.main.humidity).toFixed(2)} &#x25;</p>
            </aside>
          )
        )}
      </section>
    </section>
  );
}
