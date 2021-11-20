import { useParams } from "react-router";
import content from './content';
import './blog.css';

const Post = () => {
  const { id } = useParams();

  return (
  <div className="site">
    {content.filter(content => content.id === id).map(post => (
      <h2>{post.artical}</h2>
    ))}
  </div>
  );
}

export default Post;