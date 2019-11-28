import React from 'react'
import axios from 'axios';
import watersafety from "../images/watersafety.png";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ApiWeather: []
    };
  }

  componentDidMount() {
    //Using axios to connect to the Api and recieve the data requested
    axios.get('http://api.openweathermap.org/data/2.5/weather?q=Galway,Ireland&appid=d24d19a0fa6b2334b4039e272b3c79ef')
      .then((response) => {
        this.setState({ ApiWeather: response.data.weather })
      })
      .catch((error) => {
        console.log(error);
      });
  }

  slideShow()
  {console.log("TESTING");}

  //Printing out my weather Api into a list
  render() {
    var { ApiWeather } = this.state;
    return (
      <ul className="App-header">
        {ApiWeather.map(weather => (
          <li>
            <div>
              <h2>It is {new Date().toLocaleTimeString()}.</h2>
              <h2>Todays Weather</h2>
              <h3>{weather.description}</h3>
              <br></br>
              <h4><i>Remember always be safe near the water!</i></h4>
              <img src={watersafety} alt="Irish Water Safety.png"/>
            </div>
          </li>
        ))}
      </ul>
    );
  }

}

export default Index;