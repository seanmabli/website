import react, { Component } from 'react';
import './Navbar.css'

const MenuItems = [
  {
    title: 'Home',
    url: '#',
  },
  {
    title: 'Services',
    url: '#',
  },
  {
    title: 'Products',
    url: '#',
  },
  {
    title: 'Contact Us',
    url: '#',
  },
  {
    title: 'Sign Up',
    url: '#',
  },
]

class Navbar extends Component {
  state = { clicked: false}

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked})
  }
  render() {
    return(
      <nav className="NavbarItems">
        <div className="menu-icon" onClick={this.handleClick}>
          <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <u1 className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}> 
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={'nav-links'} href={item.url}>
                  {item.title}
                </a>
              </li>
            ) 
          })} 
        </u1>
      </nav>
    )
  }
}

export default Navbar;