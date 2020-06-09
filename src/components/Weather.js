import React from 'react';

class Weather extends React.Component{
    render(){
        return(
            <div>
              {this.props.city && this.props.country && <p className="weather__key"> Location:{this.props.city}, {this.props.country}</p>}
               {this.props.temperature && <p className="weather__key"> Temperature:{this.props.temperature}{` °C`}</p>}
              {this.props.humidity &&  <p className="weather__key"> Humidity:{this.props.humidity}</p>}
              {this.props.description &&  <p className="weather__key"> Condition: {this.props.description}</p>}
              {this.props.error && <p className="weather__key">{this.props.error}</p>}
            </div>
        );
    }
    
};

export default Weather;