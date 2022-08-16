import React from "react";
import styles from '../appStyles.module.css';

function Galleries({ galleries, onGalleryClick }) {

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
        </div>
    )
}

export default Galleries