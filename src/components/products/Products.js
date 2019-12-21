import React, { Component } from 'react';
import axios from 'axios';

class Products extends React.PureComponent {

	state = {
	    products: []
	};

	componentDidMount() {
	    const url = 'http://api/product/read.php';
	    axios.get(url).then(response => response.data)
	    .then((data) => {
	        const products = data.records;
        	this.setState({ products });
	    	console.log(data);
	    })
	}

    removeProduct(id){
        let products = [...this.state.products];
        let newProducts = products.filter(product => product.id !== id);
        // let newProducts = [...this.state.products].filter(product => product.id !== id);
        // let newProducts = products;
        this.setState({products: newProducts});
    }


/*
  deleteProduct(productId) {
    const { products } = this.state;

    const apiUrl = 'http://localhost/dev/tcxapp/reactapi/deleteProduct';
    const formData = new FormData();
    formData.append('productId', productId);

    const options = {
      method: 'POST',
      body: formData
    }

    fetch(apiUrl, options)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            response: result,
            products: products.filter(product => product.id !== productId)
          });
        },
        (error) => {
          this.setState({ error });
        }
      )
  }
  */

  render() {

    let produtsRows = this.state.products.map((product, i) => {
        console.log(product, i);

        return (
            <tr key={i}>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.description}</td>
                <td>{product.category_id}</td>
                <td><button onClick={() => this.removeProduct(product.id)}>Remove</button></td>
                <td><button onClick={() => this.editProduct(product.id)}>Edit</button></td>
            </tr>
        );
    });


    return (
        <div>
            <h3>Products in Mysql</h3>                
                <table border="1">
                    <tbody>
                        <tr style={{textAlign: 'center'}}>
                            <td>Name</td>
                            <td>Price</td>
                            <td>Description</td>
                            <td>Category</td>
                            <td colSpan="2">Action</td>
                        </tr>
                        {produtsRows}
                    </tbody>
                </table>
        </div>
    );
  }
}

export default Products;
