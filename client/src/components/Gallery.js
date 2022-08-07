import React, { useEffect } from "react";
import styles from '../appStyles.module.css';

function Gallery() {

    useEffect(() => {
        fetch('/pieces')
        .then(r => r.json)
        .then(pieces => console.log(pieces))
    })

    return (
        'the gallery page'
    )
}

export default Gallery