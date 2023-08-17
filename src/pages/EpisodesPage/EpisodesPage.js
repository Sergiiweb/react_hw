import {useSelector} from "react-redux";

import {Episodes, EpisodesPagination} from "../../components";

const EpisodesPage = () => {
    const {isLoading, errors} = useSelector(state => state.episodes);

    return (
        <div>
            {isLoading && <h1 style={{textAlign: 'center'}}>Loading............</h1>}
            {errors && <h1 style={{textAlign: 'center'}}>{JSON.stringify(errors)}</h1>}
            <Episodes/>
            <EpisodesPagination/>
        </div>
    );
};

export {EpisodesPage};