function all(id){
    return emulateRequest().then(() => {
        return users.map((user) => {return {id: user.id, name: user.name}});
    });
}

function get(id){
    return emulateRequest().then(() => {
        let num = users.findIndex(user => user.id === id);
        return num === -1 ?  null : users[num];
    });
}

export {all, get};

let users = [
        {
            id: 1,
            name: 'Some user 1',
            description: 'First description 1',
            age: 1900
        },
        {
            id: 2,
            name: 'Another user 2',
            description: 'Second description 2',
            age: 2000
        },
        {
            id: 3,
            name: 'Some user 3',
            description: 'Third description 3',
            age: 2100
        },
        {
            id: 4,
            name: 'Any user 4',
            description: 'Four description 1',
            age: 2200
        },
        {
            id: 5,
            name: 'Some user 5',
            description: 'Some description 4',
            age: 2400
        }
];

function emulateRequest(timeout = 200){
     return new Promise((resolve) => {
         window.setTimeout(resolve, timeout)
     });
}