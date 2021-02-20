import React, { Component } from 'react';
import { Dropdown, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const divStyle = {
    display: 'flex',
    alignItems: 'center',
    position: 'absolute', left: '40%', top: '20%',
    transform: 'translate(-50%, -50%)'
  };

  const textStyle = {
    alignItems: 'center',
    margin: '10px',
    padding: '10px'
  };

const divDropdown = {
    margin: '10px',
}

export class SearchFilters extends Component {
    constructor(props) {
        super(props);
        this.state = {
          count: 0
        };
        this.countryData = [
          { value: 'USA', name: 'USA' },
          { value: 'CANADA', name: 'CANADA' }            
      ];
      }

  render() {
    return(
        <div>
        <div style={textStyle}>
            FIND YOUR BUDDY NOW!!
        </div>
        <div style={divStyle}>
        <Dropdown style={divDropdown}>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                School
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        <Dropdown style={divDropdown}>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Course
            </Dropdown.Toggle>
            <Dropdown.Menu>
                {this.countryData.map((e, key) => {
                    return <Dropdown.Item padding="10px" key={key} value={e.value}>{e.name}</Dropdown.Item>;
                })}
            </Dropdown.Menu>
        </Dropdown>
        <Dropdown style={divDropdown}>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Program
            </Dropdown.Toggle>
            <Dropdown.Menu>
                {this.countryData.map((e, key) => {
                    return <Dropdown.Item padding="10px" key={key} value={e.value}>{e.name}</Dropdown.Item>;
                })}
            </Dropdown.Menu>
        </Dropdown>
        <Button variant="info">Search</Button>
        </div>
        </div>
        );
    }
}

export default SearchFilters;