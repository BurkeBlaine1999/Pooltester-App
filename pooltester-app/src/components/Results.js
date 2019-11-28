import React from 'react';
import ResultItems from './ResultItems';

class Results extends React.Component {

    render() {
        return this.props.myResults.map((result) => {
            //console.log({result});
            return <ResultItems key={result._id} result={result}></ResultItems>
        });
    }
}
export default Results;