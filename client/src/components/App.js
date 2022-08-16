import React, { useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Login from './Login';
import Header from './Header';
import Navbar from './Navbar';
import SignUp from './SignUp';
import Galleries from './Galleries';
import CreatePiece from './CreatePiece';
import GalleryPage from './GalleryPage';
import PiecePage from './PiecePage';
import ProfilePage from './ProfilePage';
import EditPiece from './EditPiece';

function App() {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)
  const [gallery, setGallery] = useState(null)
  const [piece, setPiece] = useState([])
  const [galleries, setGalleries] = useState([])

  useEffect(()=> {
    fetch('/me')
    .then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user))
      }
    })
  },[])

  useEffect(() => {
    fetch('/galleries')
    .then((r) => {
        if (r.ok) {
            r.json().then(venues => setGalleries(venues))
        } else {
            r.json().then(err => console.log(err.errors))
        }
    })
}, [])

  function handleGalleryClick(galleryObj) {
    setGallery(galleryObj)
    navigate('/gallery_page')
  }

  function handlePieceClick(pieceObj) {
    setPiece(pieceObj)
    navigate('/piece_page')
  }

  function handleEditPiece(pieceObj) {
    setPiece(pieceObj)
    navigate('edit_piece')
  }

  return (
    <div>
      <Header/>
      {user ?
      <>
        <Navbar user={user} setUser={setUser}/>
        <Routes>
          <Route exact path="/galleries"element={<Galleries galleries={galleries} onGalleryClick={handleGalleryClick} />}/>
          <Route exact path="/create_piece" element={<CreatePiece gallery={gallery}/>}/>
          <Route exact path="/gallery_page" element={<GalleryPage onPieceClick={handlePieceClick} gallery={gallery} />}/>
          <Route exact path="/piece_page" element={<PiecePage piece={piece}/>}/>
          <Route exact path="/profile" element={<ProfilePage onEditPieceClick={handleEditPiece} user={user} />}/>
          <Route exact path="/edit_piece" element={<EditPiece piece={piece}/>}/>
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
