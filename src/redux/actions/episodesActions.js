const episodesActionsTypes = {
    SET_EPISODES: 'SET_EPISODES'
}

const episodesActions = {
    set: (payload) => ({type:episodesActionsTypes.SET_EPISODES, payload})
}

export {
    episodesActions,
    episodesActionsTypes
}