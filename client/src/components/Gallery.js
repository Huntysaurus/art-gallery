import React, { useEffect, useState } from "react";
import styles from '../appStyles.module.css';

function Gallery({ pieces }) {

    console.log(pieces)

    return (
        <>
            {pieces.map(piece => {
                return (
                    <img key={piece.image} src={piece.image}/>
                )
            })}
        </>
    )
}

export default Gallery