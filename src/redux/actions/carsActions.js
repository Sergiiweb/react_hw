const carsActionsTypes = {
    SET_CARS: 'SET_CARS',
    CREATE_CAR: 'CREATE_CAR',
    UPDATE_CAR: 'UPDATE_CAR',
    DELETE_CAR: 'DELETE_CAR',
}

const carsActions = {
    set: (payload)=>({type:carsActionsTypes.SET_CARS, payload}),
    create: (payload)=> ({type:carsActionsTypes.CREATE_CAR, payload})
}

export {
    carsActions,
    carsActionsTypes
}