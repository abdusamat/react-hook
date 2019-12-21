import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as usersApi from './../../api/users';

export default class extends Component{
    state = {
        loaded: false,
        info: null,
        something: 0
    }

    componentDidMount(){
        this.loadInfo();
    }

    componentDidUpdate(prevProps){
        if(prevProps.id !== this.props.id){
            this.loadInfo();
        }
    }

    somethingInc = () => {
        this.setState({something: this.state.something + 1});
    }

    derSomething(something){
        return something ** 8;
    }

    loadInfo(){
        if (this.state.loaded){
            this.setState({ loaded: false, info: false });
        }

        usersApi.get(this.props.id).then((info) => {
            this.setState({
                loaded: true,
                info
            });
        })
    }

    render(){
        if(!this.state.loaded){
            return <div className="profile_loading">Loading ...</div>
        }

        let der = this.derSomething(this.state.something);

        return <table className="table table-bordered" border="1">
            <tbody>
            <tr>
                <td>Name</td>
                <td>{ this.state.info.name }</td>
            </tr>
            <tr>
                <td>About</td>
                <td>{ this.state.info.description }</td>
            </tr>
            <tr onClick={this.somethingInc}>
                <td>Click me</td>
                <td>{ this.state.something }</td>
            </tr>
            <tr>
                <td>SomethingInc me</td>
                <td>{ der }</td>
            </tr>
            </tbody>
        </table>
    }
}