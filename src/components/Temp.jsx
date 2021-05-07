
import weather from './weather.json';
import React, { useState } from 'react'
import * as ReactBootStrap from "react-bootstrap";

const current = weather.current;
// const longitude = weather.lon
// const latitude = weather.lat
console.log(weather.current.weather.main)

const weatherData = () => {
  // console.log(weather)
  return(


    <div className="card" style={{width: '18rem'}}>
      <div className="card-body">

        <p className="card-text">
            <p>{` ${weather.lat}, ${weather.lon} `}</p>
            <p>{new Date(weather.current.dt).toLocaleTimeString("en-US")}</p>
            <h2>{`${weather.current.temp}° F`}</h2>
            <h2>{weather.current.weather.icon}</h2>
            <p>{` Feels like ${weather.current.feels_like} `}</p>
            <p>
              {
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d425345.0131705814!2d-112.40523989506706!3d33.605099093625306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b12ed50a179cb%3A0x8c69c7f8354a1bac!2sPhoenix%2C%20AZ!5e0!3m2!1sen!2sus!4v1620424362796!5m2!1sen!2sus" width="250" height="150" allowfullscreen="" loading="lazy"></iframe>
              }
            </p>

        </p>
      </div>
    </div>
    
  )
}

export default weatherData