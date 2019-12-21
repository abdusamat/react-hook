import React, { useState, useEffect  } from 'react';
import ReactDOM from 'react-dom';
import * as usersApi from './../../api/users';
import UserProfile from './profile';

export default function() {

    let [users, setUsers] = useState({loaded: false, list: null});
    useEffect(() => {
        console.log(1);
        usersApi.all().then((list) => setUsers({loaded: true, list}));
    },[]);

    let [selectedId,setId] = useState(null);

    if(!users.loaded){
        return <div className="list_loading">Loading ...</div>
    }

    let usersList = users.list.map((user) => {

        let clasess = ['list-group-item'];

        if(user.id === selectedId){
            clasess.push('text-success');
        }

        return <li className={clasess.join(' ')}
                   key={user.id}
                   onClick={() => setId(user.id)}
        >
            { user.name }
        </li>
    });
    let usersInfo = selectedId === null ?
        <div className="alert-warning">Plaese select user</div> :
        <UserProfile id={selectedId} />;

    return <div>
        <ul className="list-group">
            { usersList }
        </ul>
        <hr/>
        { usersInfo }
    </div>
};
