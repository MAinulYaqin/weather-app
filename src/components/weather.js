import React from 'react';

const Weather = ({...props, img}) => (
    <div className="weather">
        <div className="middle">
            <div className="row">
                <img src={img} alt="weather now"/>
            </div>
            <div className="row">
                {props.weather === undefined ? '' : props.weather}
            </div>
        </div>        
        <div className="bottom">
            <div>
                Temperature 
                <span>{props.temp === undefined ? '' : props.temp}</span>
            </div>
            <div>
                Wind Speed 
                <span>{props.wind === undefined ? '' : props.wind}</span>
            </div>
        </div>
    </div>
)

export default Weather