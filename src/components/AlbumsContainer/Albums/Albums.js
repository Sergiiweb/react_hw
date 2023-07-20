import React, {useEffect, useState} from 'react';
import {Album} from "../Album/Album";
import {albumsService} from "../../../services/albumsService";

const Albums = () => {
    const [albums, setAlbums] = useState([]);
    // const [trigger, setTrigger] = useState(null);

    useEffect(() => {
        albumsService.getAll().then(({data}) => setAlbums(data))
    }, [])

    return (
        <div>
            <h2>Albums:</h2>
            {albums.map(album=><Album key={album.id} album={album} />)}
        </div>
    );
};

export {Albums};