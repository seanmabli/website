import './blog.css'
import Rectangle from 'react-rectangle';
import blogcontent from './blogcontent';
import { Link } from 'react-router-dom';

const BlogPost = [
  {
    title: 'neural network from scratch',
    published: 'november 17, 2021',
    tag: 'mechine learning',
    discription: 'I implmented neural network functionality from scratch using python.  This includes trianing with backpropagtion and forward prop.'
  }
]
function Blog() {
  return(
    <div className="blog">
      <div className="column aboutinfo">
        <p>sean mabli</p>
        <h3>hello, i am sean dfkasjfdklsadjfklsdajkl sdj fasjdklf jsklajfkld fasjdklf jsakld fjsklda fjklsadfjsklad fhsdjfksladfjklSDJVKLASD FJKLASDFJKLASDJFLKSAD FJSKLDAJF SAKL</h3>
      </div>
      <div className="column blogcontent">
        {BlogPost.map((item) => {
          return (
            <div>
              <p>{item.title}</p>
              <h1>{item.published}</h1>
              <h2>&nbsp;{item.tag}</h2>
              <h3>{item.discription}</h3>
            </div>
          ) 
        })}
      </div>
    </div>
  )
}

export default Blog;