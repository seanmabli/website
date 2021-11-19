import './post.css';
import content from './content';
import { Link } from 'react-router-dom';

function Post() {
  return(
    <div className="site">
      {content.map((item) => {
        return (
          <div className="box">
            <Link to={item.url} className={'link'}>
              {item.title}
            </Link> <br/>
            <h1 className="lighter">{item.published}</h1>
            <h1>&nbsp;{item.tag}</h1>
            <h2>{item.discription}</h2>
          </div>
        ) 
      })}
    </div>
  )
}

export default Post;