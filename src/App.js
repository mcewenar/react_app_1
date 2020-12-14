import React, { Component } from 'react';
import Menu from './components/MenuComponent'; //export component within other component
import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';
import { DISHES } from './shared/dishes';
//this importation is necessary. JSX
/*function App() {
  return (
    <div className="App">
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu />
      </div>
    </div>
    
  );
}

export default App;  OTHER FORM USING FUNCTIONS*/
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES
    };
  }
  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>

        </Navbar>
        <Menu dishes={this.state.dishes}/>
      </div>
    );
  }
}
export default App;
