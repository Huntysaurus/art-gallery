import React, { useEffect, useState } from 'react';
import { Routes, Route, useHistory } from "react-router-dom";
import Login from './Login';
import Header from './Header';
import Navbar from './Navbar';
import SignUp from './SignUp';

function App() {
  const [user, setUser] = useState(null)

 useEffect(()=> {
  fetch('/users')
  .then(r => r.json())
  .then(users => console.log(users))
 }, [])

//  if (!user) return <Login onLogin={setUser} />

  return (
    <>
      <Header/>
      <Navbar/>

      <Routes>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/signup" element={<SignUp/>}/>
      </Routes>
    </>
  );
}

export default App;
