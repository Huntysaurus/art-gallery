import React, { useEffect, useState } from 'react';
import Login from './Login';
import Header from './Header';
import Navbar from './Navbar';

function App() {
  const [user, setUser] = useState(null)

 useEffect(()=> {
  fetch('/users')
  .then(r => r.json())
  .then(users => console.log(users))
 }, [])

 if (!user) return <Login onLogin={setUser} />

  return (
    <>
      <Header/>
      <Navbar/>
    </>
  );
}

export default App;
