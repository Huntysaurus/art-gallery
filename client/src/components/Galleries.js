import React, { useEffect, useState } from "react";
import styles from '../appStyles.module.css';

function Galleries({ onGalleryClick }) {
    const [galleries, setGalleries] = useState([])

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

    return (
        <div className={styles.gallery_container}>
            {galleries.map(gallery => {
              return (
                <div className={styles.gallery_name}
                    key={gallery.name}
                    onClick={()=>onGalleryClick(gallery)}
                    >
                    <p>{gallery.name}</p>
                </div>
              )
            })}
            {/* {pieces.map(piece => {
                return (
                    <div key={piece.image}>
                        <img onClick={()=>onPieceClick(piece)}
                            title='more info'
                            className={styles.gallery_card}
                            src={piece.image}/>
                    </div>
                )
            })} */}
        </div>
    )
}

export default Galleries