import { useState, useEffect } from "react";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import {Note} from "../Types/Note";
import "../Styling/NotesTable.css";

type NotesTableProps = {
    listOfNotes: Array<Note>;
    removeRow: (index: number) => void;
}

function NotesTable({listOfNotes, removeRow}: NotesTableProps) {
    const [allNotes, setAllNotes] = useState<Array<Note>>([]);

    useEffect(() => {
        setAllNotes(listOfNotes);
    }, [listOfNotes])

    return (
        <div className={"notes-table-container"}>
            <table>
                <thead>
                    <tr>
                        <th> ID </th>
                        <th> Title </th>
                        <th> Note </th>
                    </tr>
                </thead>

                <tbody>
                    {allNotes.map((note, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td className={"title-cell"}>{note.title}</td>
                            <td className={"note-cell"}>{note.content}</td>
                            <td>
                                <DeleteForeverIcon
                                    className="delete-icon"
                                    onClick={() => removeRow(index)}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default NotesTable;