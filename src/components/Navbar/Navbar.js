import react, { Component } from 'react';
import { Button } from '../Button';
import { MenuItems } from "./Menuitems";
import './Navbar.css'

class Navbar extends Component {
  state = { clicked: false}

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked})
  }
  render() {
    return(
      <nav className="NavbarItems">
        <h1 className="navbar-logo">React<i className="fab fa-react"></i></h1>
        <div className="menu-icon" onClick={this.handleClick}>
          <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <u1 className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}> 
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            ) 
          })} 
        </u1>
        <Button>Sign Up</Button>
      </nav>
    )
  }
}

export default Navbar;