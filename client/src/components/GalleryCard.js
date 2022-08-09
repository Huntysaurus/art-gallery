import React from "react";

function GalleryCard({ piece }) {

    return (
        <div>
            <h1>{piece.title}</h1>
            <img src={piece.image} alt={piece.title}/>
            <p>{piece.medium}</p>
            <p>{piece.description}</p>
            <p>{piece.worth}</p>
            <p>{piece.user.username}</p>
        </div>
    )
}

export default GalleryCard