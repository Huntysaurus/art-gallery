import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import styles from '../appStyles.module.css';

function Gallery() {

    const navigate = useNavigate()

    const [piece, setPiece] = useState(null)
    const [pieces, setPieces] = useState([])

    useEffect(() => {
        fetch('/pieces')
        .then((r) => {
            if (r.ok) {
                r.json().then(works => setPieces(works))
            } else {
                r.json().then(err => console.log(err.errors))
            }
        })
    }, [])

    function handlePieceClick(pieceObj) {
        setPiece(pieceObj)
        navigate('/gallery_card')
    }

    return (
        <div className={styles.gallery_container}>
            {pieces.map(piece => {
                return (
                    <div key={piece.image}>
                        <img onClick={()=>handlePieceClick(piece)}
                            className={styles.gallery_card}
                            src={piece.image}/>
                    </div>
                )
            })}
        </div>
    )
}

export default Gallery