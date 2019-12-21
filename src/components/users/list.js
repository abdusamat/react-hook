import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as usersApi from './../../api/users';
import UserProfile from './profile';

export default class extends Component{
    state = {
        loaded: false,
        users: [],
        selectedId: null
    }

    componentDidMount(){
        usersApi.all().then((users) => {
            // console.log(users);
            this.setState({
                loaded: true,
                users
            });
        })
    }

    setId(selectedId){
        this.setState({selectedId});
    }

    render(){
        if(!this.state.loaded){
            return <div className="list_loading">Loading ...</div>
        }

        let usersList = this.state.users.map((user) => {

            let clasess = ['list-group-item'];

            if(user.id === this.state.selectedId){
                clasess.push('text-success');
            }

            return <li className={clasess.join(' ')}
                       key={user.id}
                       onClick={() => this.setId(user.id)}
            >
                { user.name }
            </li>
        });

        let usersInfo = this.state.selectedId === null ?
            <div className="alert-warning">Plaese select user</div> :
            <UserProfile id={this.state.selectedId} />;

        return <div>
            <ul className="list-group">
                { usersList }
            </ul>
            <hr/>
            { usersInfo }
        </div>
    }
};
