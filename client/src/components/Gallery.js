import React, { useEffect, useState } from "react";
import styles from '../appStyles.module.css';

function Gallery({ pieces, onfetchPieces }) {

    useEffect(() => {
        fetch('/pieces')
        .then((r) => {
            if (r.ok) {
                r.json().then(works => onfetchPieces(works))
            } else {
                r.json().then(err => console.log(err.errors))
            }
        })
    }, [pieces])

    return (
        <div className={styles.gallery_container}>
            {pieces.map(piece => {
                return (
                    <div onClick={()=>console.log('hello')}>
                        <img className={styles.gallery_card} key={piece.image} src={piece.image}/>
                    </div>
                )
            })}
        </div>
    )
}

export default Gallery