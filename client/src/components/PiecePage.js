import React from "react";
import { useNavigate } from 'react-router-dom';
import styles from '../appStyles.module.css';

function PiecePage({ piece }) {

    console.log(piece)
    
    const navigate = useNavigate()

    return (
        <div className={styles.card_holder}>
            <h1 className={styles.title_name}>{piece.title}</h1>
            <img onClick={()=>navigate('/gallery_page')} className={styles.card_page}
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
            <p style={{textDecoration: 'underline'}}>creator: {piece.user.username}</p>
        </div>
    )
}

export default PiecePage