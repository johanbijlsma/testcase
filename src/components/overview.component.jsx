import React from 'react';
import tripDetails from './dashboard.component';

const tripObject = tripDetails[0];

class OverviewContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { origin: tripObject.origin, destination: tripObject.destination};
  }


    render() {
      return (
        <div className="searchbox__container">
          <h1 className="searchbox__title">Great! you've selected something</h1>
            <p>please check if the filled in information is correct:</p>
            <strong>Departure:</strong> {this.state.origin} <br/>
            <strong>Destination:</strong> {this.state.destination}
            </div>
      );
    }
  }



  export default OverviewContainer;


