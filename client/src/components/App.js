import React, { useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Login from './Login';
import Header from './Header';
import Navbar from './Navbar';
import SignUp from './SignUp';
import Gallery from './Gallery';
import CreatePiece from './CreatePiece';

function App() {
  const [user, setUser] = useState(null)
  const [pieces, setPieces] = useState([])

  useEffect(()=> {
    fetch('/me')
    .then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user))
      }
    })
  },[])

  useEffect(() => {
    fetch('/pieces')
    .then((r) => {
        if (r.ok) {
            r.json().then(works => setPieces(works))
        } else {
            console.log('uglonda')
        }
    })
}, [pieces])

  

  return (
    <div>
      <Header/>
      {user ?
      //logged in ()=> setPieces(...pieces)}
      <>
        <Navbar user={user} setUser={setUser}/>
        <Routes>
          <Route exact path="/gallery" element={<Gallery pieces={pieces} />}/>
          <Route exact path="/create_piece" element={<CreatePiece onCreatePiece={()=> [...pieces]}/>}/>
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
