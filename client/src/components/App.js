import React, { useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Login from './Login';
import Header from './Header';
import Navbar from './Navbar';
import SignUp from './SignUp';
import Gallery from './Gallery';

function App() {
  const [user, setUser] = useState(null)

  useEffect(()=> {
    fetch('/me')
    .then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user))
      }
    })
  },[])

  console.log(user)

  return (
    <div>
      <Header/>
      {user ?
      //logged in
      <>
        <Navbar user={user} setUser={setUser}/>
        <Routes>
          <Route exact path="/gallery" element={<Gallery/>}/>
        </Routes>
      </>
      :
      // logged out
        <Routes>
          <Route exact path="/" element={ <Login onLogin={setUser}/> }/>
          <Route exact path="/signup" element={ <SignUp onLogin={setUser}/> }/>
        </Routes>
      
      }
    </div>
  );
}

export default App;
