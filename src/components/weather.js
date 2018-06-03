import React from 'react';

const Weather = ({...props}) => (
    <div className="weather">
        <div className="middle">
            
        </div>        
        <div className="bottom">
            <div>
                Temperature 
                <span>{props.temp}</span>
            </div>
            <div>
                Wind Speed 
                <span>{props.wind}</span>
            </div>
        </div>
    </div>
)

export default Weather