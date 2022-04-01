import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { db } from './firebase'
import { collection, getDocs } from "firebase/firestore";
import './index.css';

function Blog() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
		const getUsers = async () => {
			const data = await getDocs(collection(db, 'blog'));
			setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id})))
		};
		getUsers();
	}, [])

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
        {users.map((user) => {
	  return(
            <div className="box">
              <Link to={user.url} className='p link'>
                {user.title}
              </Link> <br/>
	      <p className='h1 lighter'>{user.published.toDate().toDateString().split(' ').slice(1).join(' ')}</p>
	      <p className="h1 bold">&nbsp;{user.tag}</p>
	      <p className='h2'>{user.description}</p>
            </div>
          ) 
        })}
      </div>
    </div>
  )
}

export default Blog;
