import React, { useEffect, useState } from "react";
import styles from '../appStyles.module.css';

function Gallery() {

    const [pieces, setPieces] = useState([])

    console.log(pieces)

    useEffect(() => {
        fetch('/pieces')
        .then((r) => {
            if (r.ok) {
                r.json().then(works => setPieces(works))
            } else {
                console.log('uglonda')
            }
        })
    }, [])

    return (
        <>
            {pieces.map(piece => {
                return (
                    <p>{piece.image}</p>
                )
            })}
        </>
    )
}

export default Gallery