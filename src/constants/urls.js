const baseURL = 'https://rickandmortyapi.com/api';
// const baseURL = process.env.REACT_APP_API;

const episodes = '/episode';
const characters = '/character'

const urls = {
    characters,
    episodes,
    charactersByIds:{
        byIds: (iDs)=>`${characters}/${iDs}`
    }

}

export {
    baseURL,
    urls
}