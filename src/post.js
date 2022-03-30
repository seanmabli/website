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

  if (users.length !== 0) {
	console.log(users, 'yes')
	return (
	  	<div className="site">
		  	<div className="box">
				<p className='p'>{users.title}</p>
			  	<p className='h1 lighter'>{users.published.toDate().toDateString().split(' ').slice(1).join(' ')}</p>
			  	<p className="h1 bold">&nbsp;{users.tag}</p>
			  	<p className='h2'>{users.article}</p>
		  </div>
		</div>
	);
  } else {
	return null;
  }
}

export default Post;
