import React from 'react';


const tripDetails = [];

class SearchBoxContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { origin: '', destination: '', departDate: undefined, returnDate: undefined, travelSize: undefined, orderOpen: false };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    render() {
      return (
          <div>

        <div className="searchbox__container">
          <h1 className="searchbox__title">Look for your flight with a great price </h1>
            <form onSubmit={this.handleSubmit} autoComplete="off">
            <label htmlFor="origin">Where do you want to start your trip?</label>
            <input type="text" id="origin" name="origin" onChange={this.handleChange}
            value={this.state.origin} required/>
            <label htmlFor="destination">Where to?</label>
            <input type="text" id="destination" name="destination" onChange={this.handleChange} value={this.state.destination}/>
            <label htmlFor="departDate">When do you want to go?</label>
            <input type="date" id="departDate" name="departDate" onChange={this.handleChange} value={this.state.departDate}/>
            <label htmlFor="returnDate">Untill...</label>
            <input type="date" id="returnDate" name="returnDate" onChange={this.handleChange} value={this.state.returnDate}/>
            <label htmlFor="travelSize">What size is the travel party?</label>
            <div className="slider_container">
            <input type="range" id="travelSize" name="travelSize" onChange={this.handleChange} min="1" max="6" step="1" default="1" value={this.state.travelSize}/>
            <p className="inputslider__label">{this.state.travelSize || 1} </p>
            </div>
            <button>Search</button>
            </form>
        </div>
        <div className="searchbox__container" style={{ visibility: this.state.orderOpen === true ? 'visible': 'hidden'}}>
          <h1 className="searchbox__title">Great! you've selected something</h1>
            <p>Please check if the your information is correct:</p>
            <ul>
            <li className="searchbox__check"><strong>Departure:</strong> {this.state.origin || '-'}</li>
            <li className="searchbox__check"><strong>Destination:</strong> {this.state.destination || '-'} </li>
            <li className="searchbox__check"><strong>From:</strong> {this.state.departDate || '-'} </li>
            <li className="searchbox__check"><strong>Till:</strong> {this.state.returnDate || '-'} </li>
            <li className="searchbox__check"><strong>With:</strong> {this.state.travelSize || '-'} {this.state.travelSize > 1 ? ('people') : ('person') }</li>
            </ul>
            </div>
        </div>
      );
    }
    handleChange(e) {
      this.setState({   [e.target.name]: e.target.value
});
    }
    handleSubmit = e => {
        e.preventDefault();
        tripDetails.push(this.state);
        console.log(tripDetails);
        this.setState({ orderOpen: true});

    }

  }




  export default SearchBoxContainer;


