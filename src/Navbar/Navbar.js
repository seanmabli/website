import { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const MenuItems = [
  {
    title: 'blog',
    url: '/blog',
  },
  {
    title: 'aiinpy',
    url: '/aiinpy',
  }
]

class Navbar extends Component {
  state = { clicked: false}

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked})
  }
  render() {
    return(
      <nav className='nav'>
        <u1 className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}> 
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link to={item.url} className={'nav-links'}>
                  {item.title}
                </Link>
              </li>
            ) 
          })} 
        </u1>
      </nav>
    )
  }
}

export default Navbar;