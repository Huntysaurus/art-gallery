import React, { useEffect, useState } from 'react';
import { Routes, Route, useHistory } from "react-router-dom";
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
      <Navbar user={user} setUser={setUser}/>
      {user ?
      //logged in
        <Routes>
          <Route exact path="/gallery" element={<Gallery/>}/>
        </Routes>
      :
      // logged out
        <Routes>
          <Route exact path="/login" element={<Login />}/>
          <Route exact path="/signup" element={<SignUp onLogin={setUser}/>}/>
        </Routes>
      }
    </div>
  );
}

export default App;
