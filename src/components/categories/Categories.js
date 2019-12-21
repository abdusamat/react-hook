import React, { Component } from 'react';
import axios from 'axios';

class Categories extends React.PureComponent {

	state = {
	    mydata: []
	};

	componentDidMount() {
	    const url = 'http://api/category/read.php';
	    axios.get(url).then(response => response.data)
	    .then((data) => {
	        const mydata = data.records;
        	this.setState({ mydata });
	    	console.log(data);
	    })
	}

  render() {
    return (
        <div>
        	<ul>
		        { this.state.mydata.map(mydata => <li key={mydata.id}>{mydata.name}</li>)}
		    </ul>
        </div>
    );
  }
}

export default Categories;
