import { useState, useEffect } from "react";
import {Note} from "../Types/Note";
import "../Styling/NoteForm.css";

type NoteFormProps = {
    addNoteToTable: (note: Note) => void;
}

function NoteForm({addNoteToTable }: NoteFormProps) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [contentIsEmpty, setContentIsEmpty] = useState(true);
    const [noteAdded, setNoteAdded] = useState(false);
    const addButtonText = "Add Note";

    const addNote = () => {
        const noteToAdd: Note = {
            title: title.trim(), 
            content: content.trim()
        };

        addNoteToTable(noteToAdd);
        setNoteAdded(true);
    }

    useEffect(() => {
        if(title.trim() !== "" && content.trim() !== "") {
            setContentIsEmpty(false);
        } else {
            setContentIsEmpty(true);
        }
    }, [content, title]);

    useEffect(() => {
        if(noteAdded) {
            setContent("");
            setTitle("");
            setNoteAdded(false);
        }

    }, [noteAdded]);

    return(
        <div className={"note-form-container"}>
            <label htmlFor={"note-title"}>Title</label>
            <input
                id={"note-title"}
                className={"inputField"}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder={"Enter title"}
            />

            <label htmlFor={"note-content"}>Note</label>
            <textarea
                id={"note-content"}
                className={"contentField"}
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder={"Enter note content"}
            />

            <div className={"button-wrapper"}>
                <button onClick={addNote} disabled={contentIsEmpty}>
                    {addButtonText}
                </button>
            </div>
        </div>
    )
}

export default NoteForm;