import React from "react";
import styles from '../appStyles.module.css';

function ProfilePage({ onProfilePieceClick, user, pieces }) {
    
    return (
        <div className={styles.card_holder}>
            <h1 className={styles.title_name}>{user.username}</h1>
            <img className={styles.card_page}
                src={user.image_url}
                alt={user.username}
            />
            <div className={styles.card_iw}>
                <p className={styles.card_description} >{user.bio}</p>
            </div>
            <br/>
            <h3 style={{marginTop:'10%', }}>Owned Pieces</h3>
            <div style={{marginRight:"9%"}} className={styles.gallery_container}>
                {pieces.map(piece => {
                    return (
                        <div key={piece.id}>
                            <img className={styles.gallery_card}
                                title='more info'
                                src={piece.image}
                                alt={piece.title}
                                onClick={()=>onProfilePieceClick(piece)}
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ProfilePage