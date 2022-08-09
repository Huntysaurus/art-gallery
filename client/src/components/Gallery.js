import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import styles from '../appStyles.module.css';

function Gallery({ onPieceClick }) {

    const navigate = useNavigate()
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

    return (
        <div className={styles.gallery_container}>
            {pieces.map(piece => {
                return (
                    <div key={piece.image}>
                        <img onClick={()=>onPieceClick(piece)}
                            className={styles.gallery_card}
                            src={piece.image}/>
                    </div>
                )
            })}
        </div>
    )
}

export default Gallery