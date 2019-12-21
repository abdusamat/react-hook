import React, { useState, useEffect, useMemo  } from 'react';
import ReactDOM from 'react-dom';
import * as usersApi from './../../api/users';

export default function(props){

    let [user, setUser] = useState({loaded:false, info: null});

    useEffect(() => {
        if(user.loaded){
            setUser({loaded: false, info: null});
        }

        usersApi.get(props.id).then((info) => setUser({loaded: true, info}));
    },[props.id]);

    let [something, setSomething] = useState(0);
    let der = useMemo(() => something ** 8, [something]);

    if(!user.loaded){
        return <div className="profile_loading">Loading ...</div>
    }

    return <table className="table table-bordered" border="1">
        <tbody>
        <tr>
            <td>Name</td>
            <td>{ user.info.name }</td>
        </tr>
        <tr>
            <td>About</td>
            <td>{ user.info.description }</td>
        </tr>
        <tr onClick={() => setSomething(something + 1)}>
            <td>Click me</td>
            <td>{ something }</td>
        </tr>
        <tr>
            <td>SomethingInc me</td>
            <td>{ der }</td>
        </tr>
        </tbody>
    </table>;

}