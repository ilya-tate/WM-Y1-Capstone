import React from 'react';
import { Navigation, Footer, DayGraph, Temp, Map, UltraViolet, Humidity, Detailed, Calendar } from './export.js';
function App() {
  return (


    
    <div className="main">
      <Navigation />

      <div className="main2">
        <Humidity className="humidity" />
        <UltraViolet className="ultra-violet" />
        <Temp className="temp"/>
        <Map />
        <Detailed />
      </div>


      <DayGraph className="graphThing"/>
      <Calendar />
      <Footer className="footer" />
    </div>
  );
}

export default App;
