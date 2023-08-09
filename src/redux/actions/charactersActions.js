const charactersActionsTypes = {
    SET_CHARACTERS: 'SET_CHARACTERS',
    SET_CHARACTERS_BY_IDS: 'SET_CHARACTERS_BY_IDS'
}

const charactersActions = {
    set: (payload) => ({type: charactersActionsTypes.SET_CHARACTERS, payload}),
    setByIds: (payload) => ({type: charactersActionsTypes.SET_CHARACTERS_BY_IDS, payload}),
}

export {
    charactersActions,
    charactersActionsTypes
}