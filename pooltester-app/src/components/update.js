import React from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';

class Update extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Chlorine: '',
      Ph: '',
      Name: '',
      _id: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChlorineChange = this.handleChlorineChange.bind(this);
    this.handlePhChange = this.handlePhChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
  }
  componentDidMount() {
    alert(this.props.match.params.id);

    axios.get('http://localhost:4000/api/Results/' + this.props.match.params.id)
      .then((response) => {
        this.setState({
          _id: response.data._id,
          Chlorine: response.data.chlorine,
          Ph: response.data.ph,
          Name: response.data.name
        })
      })
      .catch();


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
    alert(this.state.Chlorine +" "+ this.state.Ph +" "+ this.state.Name);
    e.preventDefault();

    const newResults = {
      chlorine: this.state.Chlorine,
      ph: this.state.Ph,
      name: this.state.Name
    };

    axios.put('http://localhost:4000/api/Results/' + this.state._id,
      newResults)
      .then()
      .catch();

    this.setState({
      Chlorine: '',
      Ph: '',
      Name: ''
    });
  }


  render() {
    return (
      <div className="App-header">
        <form onSubmit={this.handleSubmit}>
          <div className='form-group'>
            <label>Chlorine</label>
            <input
              type='text'
              className='form-control'
              value={this.state.Chlorine}
              onChange={this.handleChlorineChange}
              required
            ></input>
          </div>

          <div className='form-group'>
            <label>Ph</label>
            <input
              type='text'
              className='form-control'
              value={this.state.Ph}
              onChange={this.handlePhChange}
              required
            ></input>
          </div>

          <div className='form-group'>
            <label>Name</label>
            <input
              type='text'
              className='form-control'
              value={this.state.Name}
              onChange={this.handleNameChange}
              required
            ></input>
          </div>

          <div>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              value="Edit Result" >Update
            </Button>
          </div>
        </form>
      </div>
    )
  }
}

export default Update;