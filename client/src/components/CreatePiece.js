import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import styles from '../appStyles.module.css';

function CreatePiece({ onCreatePiece }) {

    const [image, setImage] = useState('')
    const [title, setTitle] = useState('')
    const [medium, setMedium] = useState('')
    const [desc, setDesc] = useState('')
    const [worth, setWorth] = useState('')

    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault()
        fetch("/pieces", {
            method: "POST",
            headers: {
                "Content_Type": "application/json",
            },
            body: JSON.stringify({
                image,
                title,
                medium,
                description: desc,
                worth,
            }),
        }).then((r)=> {
            if (r.ok) {
                r.json().then((piece) => onCreatePiece(piece))
            } else {
                r.json().then(console.log('ickaicka'))
            }
        })
    }

    return (
        <div className={styles.bg2}> 
            <div className={styles.wrapper_su}>
            <button className={styles.button_2} onClick={()=>navigate('/gallery')}>back to gallery</button>
                <h2 className={styles.title_name}>Upload a Piece</h2>
                <p style={{ fontSize:"22px"}}>Upload new work!</p>

                <form onSubmit={handleSubmit}>
                    <div className={styles.form_field}>
                        <label>
                            {'Upload a picture of your piece: '}
                            <input
                                placeholder="upload a picture!"
                                type="text"
                                value={image}
                                onChange={(e)=>setImage(e.target.value)}
                            />
                        </label>
                        <p>Provide a picture of your piece</p>
                    </div>
                    <div className={styles.form_field}>
                        <label>
                            {'Title of Piece: '}
                            <input
                                placeholder="what's your piece called?"
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
                                placeholder="what material is used?"
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
                            {'Worth: '}
                            <input
                                placeholder="Dollar amount"
                                type="number"
                                value={worth}
                                onChange={(e)=>setWorth(e.target.value)}
                            />
                        </label>
                    </div>
                    <br/>
                    <button className={styles.button} type='submit'>Upload Piece</button>
                </form>
            </div>
            <div className={styles.errors_su} >
                {/* {errors.map(err => {
                    return <p key={err}>{err}</p>
                })} */}
            </div>
        </div>
    )
}

export default CreatePiece