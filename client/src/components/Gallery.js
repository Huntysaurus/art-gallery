import React, { useEffect, useState } from "react";
import styles from '../appStyles.module.css';

function Gallery({ pieces }) {

    return (
        <div className={styles.grid_container}>
            {pieces.map(piece => {
                return (
                    <div>
                        <img className={styles.gallery_card} key={piece.image} src={piece.image}/>
                    </div>
                )
            })}
        </div>
    )
}

export default Gallery