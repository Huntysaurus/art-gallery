import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Login from './Login';
import Header from './Header';
import Navbar from './Navbar';
import SignUp from './SignUp';
import Gallery from './Gallery';
import CreatePiece from './CreatePiece';
import GalleryCard from './GalleryCard';

function App() {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)
  const [pieces, setPieces] = useState([])
  const [piece, setPiece] = useState(null)

  useEffect(()=> {
    fetch('/me')
    .then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user))
      }
    })
  },[])

  function handlePieceClick(pieceObj) {
    setPiece(pieceObj)
    navigate('/gallery_card')
  }

  return (
    <div>
      <Header/>
      {user ?
      <>
        <Navbar user={user} setUser={setUser}/>
        <Routes>
          <Route exact path="/gallery" element={<Gallery onPieceClick={handlePieceClick} />}/>
          <Route exact path="/create_piece" element={<CreatePiece/>}/>
          <Route exact path="/gallery_card" element={<GalleryCard piece={piece} />}/>
        </Routes>
      </>
      :
        <Routes>
          <Route exact path="/" element={ <Login onLogin={setUser}/> }/>
          <Route exact path="/signup" element={ <SignUp onLogin={setUser}/> }/>
        </Routes>
      
      }
    </div>
  );
}

export default App;
