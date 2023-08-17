import {useSearchParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

const Episodes = () => {
    const dispatch = useDispatch();
    const {episodes} = useSelector(store => store.episodes);
    const [query, setQuery] = useSearchParams({page: '1'});

    useEffect(()=>{

    },[])

    return (
        <div>
            Episodes
        </div>
    );
};

export {Episodes};