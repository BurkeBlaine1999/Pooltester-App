import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Link } from 'react-router-dom';

//ICONS
import { FaRegTrashAlt } from 'react-icons/fa';
import { FaEdit } from 'react-icons/fa';

class ResultItems extends React.Component {

  constructor() {
    super();
    this.DeleteResult = this.DeleteResult.bind(this);
  }

  DeleteResult(e) {
    console.log("Delete Clicked");
    alert("Results deleted!")
    //Delete result using its unique ID
    axios.delete("http://localhost:4000/api/Results/" + this.props.result._id)
      .then()
      .catch();
    //Refresh Page
    window.location.reload();

  }
  render() {
    return (
      <div>
        {}


        <Card border="primary" style={{ width: '28rem' }}>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <body>

                <p id="icon" onClick={this.DeleteResult}><FaRegTrashAlt /></p>
                <h4>Chlorine : {this.props.result.chlorine}</h4>
                <h4>pH level : {this.props.result.ph}</h4>
                <h4>Name     : {this.props.result.name}</h4>
              </body>
            </blockquote>
          </Card.Body>
          <Link to={"/Update/" + this.props.result._id} className="btn btn-primary"><FaEdit></FaEdit> Edit</Link>
        </Card>
        <br></br>
      </div>
    )
  }
}
export default ResultItems;