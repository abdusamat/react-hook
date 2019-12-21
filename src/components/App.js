import React, { Component } from 'react';
import './App.css';
import UsersList from './users/list';
import CounterClass from './counters/class';

class App extends React.PureComponent {

  render() {
    return (
        <div>
            <CounterClass min={1} max={15} />
            <UsersList/>
        </div>
    );
  }
}

export default App;
