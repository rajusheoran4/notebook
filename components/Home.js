import React, { useContext } from "react";
import noteContext from  '../context/notes/noteContext';

export const Home = () => {
    const context = useContext(noteContext);
    const {notes, setNotes} = context;
    return (
        <>
        <div className="container my-3">
                <h2>Your Notes</h2>
                {notes.map((notes)=>{
                    return notes.title;
                })}
            </div>
        </>
    )
}

export default Home;
