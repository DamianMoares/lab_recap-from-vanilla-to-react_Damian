import React,{ useEffect, useState } from 'react'

import './App.css'

let UserList;

function App() {
  const [users, setUsers] = useState([]);
  const [skip, setSkip] = useState(0);
  const [loading, setLoading] = useState(false);
  const limit = 10;


const fetchUsers = async()=>{
  setLoading(true);
  try{
    const response=await fetch(
       `https://dummyjson.com/users?limit=${limit}&skip=${skip}`
    );
       const jsonResponse = await response.json();

      setUsers((prevUsers) => [...prevUsers, ...jsonResponse.users]);
      setSkip((prevSkip) => prevSkip + limit);
    } catch (error) {
      console.error("Failed to fetch users:", error);
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="App">
      <header>
        <h1>User Profiles</h1>
      </header>
      <main>
        <div className="user-list-container">
          {users.map((user) => (
            <div key={user.id} className="user-card">
              <img src={user.image} alt={user.firstName} />
              <p>
                {user.firstName} {user.lastName}
              </p>
              <p>
                {user.email}
              </p>
            </div>
          ))}
        </div>
        <div>
          <button onClick={fetchUsers} disabled={loading}>
          {loading ? "Loading..." : "Load More"}
        </button>
        </div>
        
      </main>
    </div>
  )
}

export default App
