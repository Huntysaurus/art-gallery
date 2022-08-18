import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import styles from '../appStyles.module.css';

function EditPiece({ onFetchGalleries, piece }) {

    const navigate = useNavigate()
    const [errors, setErrors] = useState([])

    const [image, setImage] = useState(piece.image)
    const [title, setTitle] = useState(piece.title)
    const [medium, setMedium] = useState(piece.medium)
    const [desc, setDesc] = useState(piece.description)
    const [worth, setWorth] = useState(piece.worth)

    function handleSubmit(e) {
        e.preventDefault()
        fetch(`/pieces/${piece.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                image: image,
                title: title,
                medium: medium,
                description: desc,
                worth: worth
            }),
        }).then((r)=> {
            console.log({
                image: image,
                title: title,
                medium: medium,
                description: desc,
                worth: worth
            })
            if (r.ok) {
                fetch('/galleries')
                .then(r=>r.json())
                .then(galleries => onFetchGalleries(galleries))
                r.json().then(alert('Piece updated successfully'))
                .then(navigate('/profile'))
            } else {
                r.json().then((err) => setErrors(err.errors))
            }
        })
    }

    return (
        <div className={styles.bg3}> 
            <div className={styles.wrapper_pc}>
            <button className={styles.button_2} onClick={()=>navigate('/profile')}>back to profile</button>
            <button className={styles.button_3}>Delete Piece</button>
                <h2 className={styles.title_name}>Edit Piece</h2>

                <form onSubmit={handleSubmit}>
                    <div className={styles.form_field}>
                        <label>
                            {'Image of piece: '}
                            <input
                                placeholder={piece.image}
                                type="text"
                                value={image}
                                onChange={(e)=>setImage(e.target.value)}
                                />
                        </label>
                    </div>
                    <div className={styles.form_field}>
                        <label>
                            {'Title of Piece: '}
                            <input
                                placeholder="maximum 30 characters"
                                type="text"
                                value={title}
                                onChange={(e)=>setTitle(e.target.value)}
                                />
                        </label>
                    </div>
                    <div className={styles.form_field}>
                        <label>
                            {'Piece Medium: '}
                            <input
                                placeholder="maximum 50 characters"
                                type="text"
                                value={medium}
                                onChange={(e)=>setMedium(e.target.value)}
                                />
                        </label>
                    </div>   
                    <div className={styles.form_field}>
                        <label>
                            {'description: '}
                            <textarea className={styles.lg_input_field}
                                placeholder="Descriptions aren't necessary, however, giving the viewer a bit of insight on the inspiration and background doesn't hurt! The description can't exceed 500 characters"
                                type="text"
                                value={desc}
                                onChange={(e)=>setDesc(e.target.value)}
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            {'Worth: $'}
                            <input
                                placeholder="Dollar amount"
                                type="number"
                                min="0"
                                max="9999"
                                value={worth}
                                onChange={(e)=>setWorth(e.target.value)}
                            />
                        </label>
                    </div>
                    <br/>
                    <button className={styles.button} type='submit'>Confirm Changes</button>
                </form>
            </div>
            <div className={styles.errors_su} >
                {errors.map(err => {
                    return <p key={err}>{err}</p>
                })}
            </div>
        </div>
    )
}

export default EditPiece