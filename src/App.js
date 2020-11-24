import React, { Components } from 'react';
//import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';
//this importation is necessary
function App() {
  return (
    <div className="App">
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Hello World </NavbarBrand>
          </div>
        </Navbar>
      </div>
    </div>
  );
}

export default App;
