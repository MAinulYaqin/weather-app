import React from 'react';

const Form = ({getWeather}) => (
    <div className="Form">
        <form onSubmit={getWeather}>
            <div className="row">
                <label htmlFor="city">City Name</label>
                <input type="text" name="city" />
            </div>
            <div className="row">
                <button type="submit">Check Weather</button>
            </div>
        </form>
    </div>
)

export default Form