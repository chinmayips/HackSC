import React from 'react';
// import searchFilters from './searchFilters';
import { Dropdown, Button, Nav, Navbar, NavDropdown, Form, FormControl, Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const divStyle = {
    display: 'flex',
    alignItems: 'center',
    position: 'absolute', left: '40%', top: '20%',
    transform: 'translate(-50%, -50%)'
  };

  const textStyle = {
    alignItems: 'center',
    margin: '10px'
  };

const divDropdown = {
    margin: '10px',
}

class App extends React.Component {
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
      return (
        <body>
        <div>
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">USC-Connect</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Messages</Nav.Link>
                {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown> */}
                </Nav>
                <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
            </Navbar>
        </div>
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
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" ssrc="holder.js/100px180" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
        </body>
      );
    }
  }

// const App = () => {
//     return (
//         <div style={{
//             position: 'absolute', left: '50%', top: '50%',
//             transform: 'translate(-50%, -50%)'
//         }}>
//         <Dropdown>
//             <Dropdown.Toggle variant="success" id="dropdown-basic">
//                 Dropdown Button
//             </Dropdown.Toggle>
//             <Dropdown.Menu>
//                 <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
//                 <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
//                 <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
//             </Dropdown.Menu>
//         </Dropdown>
//         <Dropdown>
//             <Dropdown.Toggle variant="success" id="dropdown-basic">
//                 Dropdown Button
//             </Dropdown.Toggle>
//             <Dropdown.Menu>
//                 {this.countryData.map((e, key) => {
//                     return <Dropdown.Item key={key} value={e.value}>{e.name}</Dropdown.Item>;
//                 })}
//             </Dropdown.Menu>
//         </Dropdown>
//         </div>
//     );
// }

export default App;