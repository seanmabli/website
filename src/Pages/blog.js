import './blog.css'
import Rectangle from 'react-rectangle';
import blogcontent from './blogcontent';
import { Link } from 'react-router-dom';

function Blog() {
  return(
    <div className="blog">
      <div className="column aboutinfo">
        <p>sean mabli</p>
        <h2>hello, i am sean dfkasjfdklsadjfklsdajkl sdj fasjdklf jsklajfkld fasjdklf jsakld fjsklda fjklsadfjsklad fhsdjfksladfjklSDJVKLASD FJKLASDFJKLASDJFLKSAD FJSKLDAJF SAKL</h2>
      </div>
      <div className="column blogcontent">
        <p>neural network from scratch</p>
        <h1>november 17, 2021      mechine learning</h1>
        <h2>fdsafhsjadhfshajdfhsajkdhj</h2>
      </div>
    </div>
  )
}

export default Blog;