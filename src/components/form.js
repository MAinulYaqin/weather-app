import React from 'react';

const Form = ({getWeather}) => (
    <div className="Form">
        <form onSubmit={getWeather}>
            <div className="row">
                <input type="text" id="city-input" name="city" placeholder="Type your city here"/>
            </div>
            <div className="row">
                <button type="submit">Check Weather</button>
            </div>
        </form>
    </div>
)

export default Form