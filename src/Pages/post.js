import './blog.css'
import blogcontent from './blogcontent';
import { Link } from 'react-router-dom';

function Blog() {
  return(
    <div className="blog">
      <div className="column aboutinfo">
        <p>sean mabli</p>
        <h3>hello, i am sean dfkasjfdklsadjfklsdajkl sdj fasjdklf jsklajfkld fasjdklf jsakld fjsklda fjklsadfjsklad fhsdjfksladfjklSDJVKLASD FJKLASDFJKLASDJFLKSAD FJSKLDAJF SAKL</h3>
      </div>
      <div className="column blogcontent">
        {blogcontent.map((item) => {
          return (
            <div>
              <Link to={item.url} className={'link'}>
                {item.title}
              </Link>
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