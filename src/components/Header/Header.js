import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {Box, LinearProgress} from "@mui/material";

import css from './Header.module.css';

const Header = () => {
    const navigate = useNavigate();
    const {current} = useSelector(state => state.episodes);
    const {isLoading} = useSelector(state => state.progress);

    return (
        <div>
            <div className={css.Header}>
                <div className={css.Logo} onClick={() => navigate('')}>The Rick & Morty</div>
                {current && <div className={css.Nav}>
                    {current}
                </div>}
            </div>
            <div>
                {isLoading && <Box sx={{width: '100%', height: '10px', color: 'grey.500'}}>
                    <LinearProgress color="inherit"/>
                </Box>}
            </div>
        </div>
    );
};

export {Header};