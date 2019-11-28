import React from 'react'
import Results from './Results';
import axios from 'axios';


class readResults extends React.Component {

    state = {
        Results: []
    };

    componentDidMount() {
        axios.get('http://localhost:4000/api/Results')
            .then((response) => {
                this.setState({ Results: response.data.Results })
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        return (
            <div className="App-header">
                <h1>Results</h1>
                <Results myResults={this.state.Results}></Results>
            </div>
        );
    }
}
export default readResults;