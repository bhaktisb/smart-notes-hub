import { useState } from "react";

import {
    TextField,
    Button,
    Box
} from "@mui/material";

function AddNoteForm({ addNote }) {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = () => {

        if (!title || !description) {
            return;
        }

        const newNote = {
            title,
            description
        };

        addNote(newNote);

        setTitle("");
        setDescription("");
    };

    return (
        <Box
            sx={{
                width: "300px",
                margin: "30px auto",
                display: "flex",
                flexDirection: "column",
                gap: 2
            }}
        >

            <TextField
                label="Title"
                variant="outlined"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <TextField
                label="Description"
                variant="outlined"
                multiline
                rows={4}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />

            <Button
                variant="contained"
                onClick={handleSubmit}
            >
                Add Note
            </Button>

        </Box>
    );
}

export default AddNoteForm;