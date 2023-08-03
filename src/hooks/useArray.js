
const useArray = (array, method, id) => {


    if (method === 'add') {
        array.push(array.length+1)
    }
    if (method === 'delete') {
        array.splice(id, 1)
    }

};

export {useArray};