import './blog.css';
import content from './content';
import { Link } from 'react-router-dom';

function blog() {
  return(
    <div className="site">
      <div className="about">
        <p className="box">sean mabli</p>
        <h2>hello, i am sean dfkasjfdklsadjfk lsdajkl sdj fasjdklf jsklajfkld fasjdklf jsakld fjsklda fjklsadfjsklad fhsdjfksladf jklSDJVKLASD FJKLASDFJKLASD 
        JFLKSAD FJSKLDAJF SAKL</h2>
      </div>
      <div className="blog">
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
    </div>
  )
}

export default blog;