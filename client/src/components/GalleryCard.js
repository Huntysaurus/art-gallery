import React from "react";
import styles from '../appStyles.module.css';

function GalleryCard({ piece }) {

    return (
        <div className={styles.card_holder}>
            <h1 className={styles.title_name}>{piece.title}</h1>
            <img className={styles.card_page}
                src={piece.image}
                alt={piece.title}
            />
            <div className={styles.card_iw}>
                <p>{piece.medium}</p>
                <p className={styles.card_description} >{piece.description}</p>
                <br/>
            </div>
            <p>valued at ${piece.worth}</p>
            <p style={{textDecoration: 'underline'}}>creator: {piece.user.username}</p>
        </div>
    )
}

export default GalleryCard