import React from 'react';
import SearchFilters from './components/SearchFilters';
import CardItem from './components/CardItem';
import TopBar from './components/TopBar';
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
    margin: '10px',
    padding: '10px'
  };

const divDropdown = {
    margin: '10px',
}

class App extends React.Component {
  
    render() {
      return (
        <body>
            <TopBar/>
            <SearchFilters/>
            <CardItem/>
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