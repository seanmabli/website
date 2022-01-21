import { useParams } from "react-router";
import content from './content';
import './index.css';

function Post() {

  const { id } = useParams();
  const postcontent = content.filter(content => content.id === id);
  
  return (
    <div className="site">
      {postcontent.map((item) => {
        return (
          <div className="box">
            <p className='p'>{item.title}</p>
            <p className='h1 lighter'>{item.published}</p>
            <p className='h1 bold'>&nbsp;{item.tag}</p>
            <p className='h2'>{item.artical}</p>
          </div>
        ) 
      })}
    </div>
  );
}

export default Post;