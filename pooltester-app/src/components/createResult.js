import React from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';

class createResult extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Chlorine: '',
      Ph: '',
      Name: ''
    };

    //Handlesubmits
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChlorineChange = this.handleChlorineChange.bind(this);
    this.handlePhChange = this.handlePhChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleChlorineChange(e) {
    this.setState({ Chlorine: e.target.value });
  }

  handlePhChange(e) {
    this.setState({ Ph: e.target.value });
  }

  handleNameChange(e) {
    this.setState({ Name: e.target.value });
  }

  handleSubmit(e) {
    alert("Chlorine: " + this.state.Chlorine + " ph: " + this.state.Ph + " Name: " + this.state.Name);
    e.preventDefault();


    const newResults = {
      Chlorine: this.state.Chlorine,
      Ph: this.state.Ph,
      Name: this.state.Name  
    };
    
    axios.post('http://localhost:4000/api/Results', newResults)
      .then(
        () =>{
          console.log("DEBUGGING Chlorine : " + newResults.Chlorine);
          console.log("DEBUGGING Ph : " + newResults.Ph);
          console.log("DEBUGGING Name : " + newResults.Name);
          this.setState({
            Chlorine: '',
            Ph: '',
            Name: ''
          });
        }
      )
      .catch();

   
  }

  //Form to input and submit a new result
  render() {
    return (
      <div className="App-header">
        <h2> {new Date().toLocaleTimeString()}</h2>
        <form onSubmit={this.handleSubmit}>
          <div className='form-group'>

            <label>Please enter your chlorine value : </label>
            <input
              type='number'
              value={this.state.Chlorine}
              className='form-control'
              onChange={this.handleChlorineChange}
              required>
            </input>
          </div>
          <br></br>

          <div className='form-group'>
            <label>Please enter your Ph value : </label>
            <input
              type='number'
              value={this.state.Ph}
              className='form-control'
              onChange={this.handlePhChange}
              required>
            </input>
          </div>

          <br></br>

          <div className='form-group'>
            <label>Please enter your Name: </label>
            <input
              type='text'
              value={this.state.Name}
              className='form-control'
              onChange={this.handleNameChange}
              required>
            </input>
          </div>

          <br></br>
          <div>

            <Button
              variant="contained"
              color="primary"
              type="submit"
              value="Submit results">
              Submit
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default createResult;