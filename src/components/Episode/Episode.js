import {Button, Card, CardActions, CardContent, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {charactersActions, episodesActions} from "../../redux";

const Episode = ({episode}) => {
    const {id, name, air_date, episode: episodeName, characters} = episode;

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const toCharacters = () => {
        const ids = characters.map(character => character.split('/').slice(-1)[0]).join(',');
        dispatch(episodesActions.setCurrent(name));
        navigate('/characters', {state: {ids}});
    };

    return (
        <Card sx={{width: 275}}>
            <CardContent>
                <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                    Episode #{id}:
                </Typography>
                <Typography variant="h5" component="div">
                    {name}
                </Typography>
                <Typography sx={{mb: 1.5}} color="text.secondary">
                    {air_date}
                </Typography>
                <Typography variant="body2">
                    {episodeName}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" variant={'contained'} onClick={toCharacters}>Characters</Button>
            </CardActions>
        </Card>
    );
};

export {Episode};