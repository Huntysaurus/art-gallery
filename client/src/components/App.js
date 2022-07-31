import React, { useEffect, useState } from 'react';
import Login from './Login';
import Header from './Header';
import Navbar from './Navbar';

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user))
      }
    })
  }, [])

  return (
    <>
      <Header/>
      <Login/>
      <Navbar/>
    </>
  );
}

export default App;
