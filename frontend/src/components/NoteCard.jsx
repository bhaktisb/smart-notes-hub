import {
    Card,
    CardContent,
    Typography,
    Button
} from "@mui/material";

function NoteCard({
    id,
    title,
    description,
    onDelete
}) {

    return (

        <Card
            sx={{
                width: 300,
                padding: 2
            }}
        >

            <CardContent>

                <Typography variant="h5">
                    {title}
                </Typography>

                <Typography
                    variant="body1"
                    sx={{ marginTop: 2 }}
                >
                    {description}
                </Typography>

                <Button
                    variant="contained"
                    color="error"
                    sx={{ marginTop: 3 }}
                    onClick={() => onDelete(id)}
                >
                    DELETE
                </Button>

            </CardContent>

        </Card>

    );
}

export default NoteCard;