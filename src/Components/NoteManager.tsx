import { useState, useEffect} from "react";
import {Note} from "../Types/Note";
import NoteForm from "./NoteForm";
import NotesTable from "./NotesTable";

function NoteManager() {
    const [note, setNote] = useState<Note>();
    const [allNotes, setAllNotes] = useState<Array<Note>>([]);

    const handleAddNoteToTable = (newNote: Note) => {
        setAllNotes([...allNotes, newNote]);
    }

    const handleDeleteNoteRow = (index: number) => {
        const updatedNotes = allNotes.filter((_, i) => i !== index);
        setAllNotes(updatedNotes);
    };    

    useEffect(() => {
        setNote(note);

    }, [note]);

    return (
        <div>
            <NoteForm addNoteToTable={handleAddNoteToTable}></NoteForm>
            <NotesTable removeRow={handleDeleteNoteRow} listOfNotes={allNotes}/>
        </div>
    )
}

export default NoteManager;