import './blog.css'
import Rectangle from 'react-rectangle';
import blogcontent from './blogcontent';
import { Link } from 'react-router-dom';

function Blog() {
  return(
    <nav className='blog'>
      <u1 className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}> 
        {blogcontent.map((item, index) => {
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

export default Blog;