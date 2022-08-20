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
import UserPiecePage from './UserPiecePage';
import ProfilePage from './ProfilePage';
import EditPiece from './EditPiece';

function App() {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)
  const [gallery, setGallery] = useState(null)
  const [piece, setPiece] = useState([])
  const [pieces, setPieces] = useState([])
  const [galleries, setGalleries] = useState([])
  const [loading, setIsLoading] = useState([])

  useEffect(()=> {
    fetch('/me')
    .then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user))
      }
    })
  },[])

  function handleLogin(user) {
    setUser(user)
    setPieces(user.pieces)
  }

  function handleGalleryClick(galleryObj) {
    setGallery(galleryObj)
    navigate('/gallery_page')
  }

  function handlePieceClick(pieceObj) {
    setPiece(pieceObj)
    navigate('/piece_page')
  }

  function handleEditPieceClick(pieceObj) {
    setPiece(pieceObj)
    navigate('edit_piece')
  }

  function handleProfilePieceClick(pieceObj) {
    setIsLoading(true)
    fetch(`pieces/${pieceObj.id}`)
    .then(r => {
      setIsLoading(false)
      r.json().then((piece) => setPiece(piece))
    })
    navigate('user_piece')
  }

  return (
    <div>
      <Header/>
      {user ?
      <>
        <Navbar user={user} setUser={setUser}/>
        <Routes>
          <Route exact path="/galleries"element={<Galleries onFetchGalleries={setGalleries} galleries={galleries} onGalleryClick={handleGalleryClick} />}/>
          <Route exact path="/create_piece" element={<CreatePiece gallery={gallery}/>}/>
          <Route exact path="/gallery_page" element={<GalleryPage onPieceClick={handlePieceClick} gallery={gallery} />}/>
          <Route exact path="/piece_page" element={<PiecePage loading={loading} onEditPieceClick={handleEditPieceClick} user={user} piece={piece}/>}/>
          <Route exact path="/profile" element={<ProfilePage onFetchUserPieces={setPieces} onProfilePieceClick={handleProfilePieceClick} user={user} pieces={pieces}/>}/>
          <Route exact path="/edit_piece" element={<EditPiece piece={piece}/>}/>
          <Route exact path="/user_piece" element={<UserPiecePage onEditPieceClick={handleEditPieceClick} user={user} piece={piece} loading={loading}/>}/>
        </Routes>
      </>
      :
        <Routes>
          <Route exact path="/" element={ <Login onLogin={handleLogin}/> }/>
          <Route exact path="/signup" element={ <SignUp onSignup={handleLogin}/> }/>
        </Routes>
      }
    </div>
  );
}

export default App;
