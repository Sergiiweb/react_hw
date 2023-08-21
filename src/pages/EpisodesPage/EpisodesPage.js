import {Pagination} from "@mui/material";
import {useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";

import {Episodes} from "../../components";

const EpisodesPage = () => {
    const {pages} = useSelector(state => state.episodes);
    const [query, setQuery] = useSearchParams();

    return (
        <div>
            <Episodes/>
            <Pagination
                count={pages}
                defaultPage={+query.get('page')}
                variant="outlined"
                shape="rounded"
                onChange={(e, page) => setQuery({page: page.toString()})}
                style={{display:'flex', justifyContent:'center', margin:20}}
            />
        </div>
    );
};

export {EpisodesPage};