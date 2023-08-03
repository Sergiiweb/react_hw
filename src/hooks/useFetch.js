import {useEffect} from "react";
import {baseUrl} from "../constants";

const useFetch = (setData, endpoint) => {

    useEffect(() => {
        fetch(`${baseUrl}${endpoint}`)
            .then(response => response.json())
            .then(value => setData(value))
    }, [])

};

export {useFetch};