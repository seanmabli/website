import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { db } from './firebase'
import { doc, getDoc } from "firebase/firestore";
import './index.css';

function Post() {
  const { id } = useParams();
  const [users, setUsers] = useState([]);
  const usersCollectionRef = doc(db, "blog", id);

  useEffect(() => {
	  const getUsers = async () => {
		  const data = await getDoc(usersCollectionRef);
		  setUsers(data.data());
	  };
	  getUsers();
  }, [])
  return (
    <div className="site">
    	{users.map((user) => {
	  		return(
        	<div className="box">
						<p className='p'>{user.title}</p>
	      		<p className='h1 lighter'>{user.published.toDate().toDateString().split(' ').slice(1).join(' ')}</p>
	      		<p className="h1 bold">&nbsp;{user.tag}</p>
	      		<p className='h2'>{user.article}</p>
          </div>
       	) 
    	})}
	  </div>
  );
}

export default Post;
