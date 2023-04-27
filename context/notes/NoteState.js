import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props)=>{
    const notesInitial = [
        [
            {
              "_id": "640f54044c340d4178156208",
              "user": "6408bfb943b48534bea63c77",
              "title": "this is updated title",
              "description": "This is the updated description for new title",
              "tag": "updated new title",
              "date": "2023-03-13T16:49:08.456Z",
              "__v": 0
            },
            {
              "_id": "64101288f3501c0c768a4341",
              "user": "6408bfb943b48534bea63c77",
              "title": "this is new title",
              "description": "This is the description for new title",
              "tag": "General",
              "date": "2023-03-14T06:22:00.981Z",
              "__v": 0
            }
          ]
    ]
    const [notes, setNotes] = useState(notesInitial);
        
    return (
    <NoteContext.Provider value={{notes, setNotes}}>
        {props.children}
    </NoteContext.Provider>
    );
}

export default NoteState;
