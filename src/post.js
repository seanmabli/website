import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { db } from './firebase'
import { collection, getDocs } from "firebase/firestore";
import './index.css';

function Post() {
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, 'blog')
  useEffect(() => {
	  const getUsers = async () => {
		  const data = await getDocs(usersCollectionRef);
		  setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
	  };
	  getUsers();
  }, [])

  const { id } = useParams();
  const postcontent = users.filter(users => users.url.substring(1) === id);
  console.log(users[0].url, users, postcontent);
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
