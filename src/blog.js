import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import {db} from './firebase'
import { collection, getDocs } from "firebase/firestore";
import content from './content';
import './index.css';

function Blog() {
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "blog")
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    };
    getUsers()
  }, [])

  return(
    <div className="site">
      <div className="about">
        <p className="p box">sean mabli</p>
        <p className='h2'>I am the creator of aiinpy, an open source python package used to create machine learning models.</p>
	<p className="h2">{users.map((user) => {return(
		<div>
			{" "}
			<p className="h2">{user.title}</p>
		</div>);
	})}</p>
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
