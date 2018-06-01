import React from 'react';

const Weather = ({...props}) => (
    <div>
        {console.log(props)}
        <div>
            <h3>Weather Summary</h3>
            <div>Weather : {props.weather}</div>
            <div>Temperature : {props.temp}</div>
            <div>Wind Speed : {props.wind}</div>
        </div>
    </div>
)

export default Weather