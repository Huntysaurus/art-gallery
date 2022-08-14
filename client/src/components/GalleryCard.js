import React from "react";
import { useNavigate } from 'react-router-dom';
import styles from '../appStyles.module.css';


function GalleryCard({ gallery, pieces }) {

    const navigate = useNavigate()
    console.log(pieces)

    return (
        <div>
            <button onClick={()=>navigate('/create_piece')} className={styles.add_piece}>+ P</button>
            <h1 className={styles.title_name} >{gallery.name}</h1>
            <div className={styles.gallery_container}>
            {pieces.map(piece => {
                return (
                    <div key={piece.image}>
                        <img onClick={()=>console.log(piece)}
                            title='more info'
                            className={styles.gallery_card}
                            src={piece.image}/>
                    </div>
                )
            })}
            </div>
            {/* <h1 className={styles.title_name}>{piece.title}</h1>
            <img onClick={()=>navigate('/gallery')} className={styles.card_page}
                title='go back'
                src={piece.image}
                alt={piece.title}
            />
            <div className={styles.card_iw}>
                <p>{piece.medium}</p>
                <p className={styles.card_description} >{piece.description}</p>
                <br/>
            </div>
            <p>valued at ${piece.worth}</p>
            <p style={{textDecoration: 'underline'}}>creator: {piece.user.username}</p> */}
        </div>
    )
}

export default GalleryCard