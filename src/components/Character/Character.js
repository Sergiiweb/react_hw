import {Card, CardContent, CardMedia, Typography} from "@mui/material";

const Character = ({character}) => {
    const {id, name, status, species, image} = character;

    return (
        <Card sx={{width: 275}}>
            <CardContent>
                <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                    Character #{id}:
                </Typography>
                <Typography variant="h5" component="div">
                    {name}
                </Typography>
                <Typography sx={{mb: 1.5}} color="text.secondary">
                    {status}
                </Typography>
                <Typography variant="body2">
                    {species}
                </Typography>
            </CardContent>
            <CardMedia
                component={'img'}
                image={image}
                alt={name}
            />
        </Card>
    );
};

export {Character};