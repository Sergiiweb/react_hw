import {Outlet, useSearchParams} from "react-router-dom";
import {Pagination} from "@mui/material";

import {CarForm, Cars} from "../components";
import {useAppSelector} from "../hooks";

const CarsPage = () => {
    const {pages} = useAppSelector(state => state.cars);
    const [query, setQuery] = useSearchParams();

    return (
        <div>
            <Outlet/>
            <hr/>
            <CarForm/>
            <hr/>
            <Cars/>
            <hr/>
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

export {CarsPage};