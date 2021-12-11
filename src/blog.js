import { Link } from 'react-router-dom';
import content from './content';
import './index.css';

function Blog() {
  return(
    <div className="site">
      <div className="about">
        <p className="p box">sean mabli</p>
        <p className='h2'>I am the creator of aiinpy, an open source python package used to create machine learning models.</p>
        <div className="box">
          <a href="https://aiinpy.org" className="h1 lighter link">aiinpy</a> 
          <a href="https://github.com/seanmabli" className="h1 lighter link">&nbsp;github</a> 
          <a href="https://www.youtube.com/channel/UCLWZ8o9yOuu0jeeOttqwmow" className="h1 lighter link">&nbsp;youtube</a> 
        </div>
      </div>
      <div className="blog">
        {content.map((item) => {
          return (
            <div className="box">
              <Link to={item.url} className='p link'>
                {item.title}
              </Link> <br/>
              <p className='h1 lighter'>{item.published}</p>
              <p className='h1 bold'>&nbsp;{item.tag}</p>
              <p className='h2'>{item.discription}</p>
            </div>
          ) 
        })}
      </div>
    </div>
  )
}

export default Blog;