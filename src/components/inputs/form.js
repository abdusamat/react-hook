import React, { Component } from 'react';
import axios from 'axios';
import './../App.css';

export default class extends React.Component {

    state = {
        name: '',
        description: '',
        price: '',
        categories: [],
        selectedCategoryId: -1,
    };

    componentDidMount() {
        const url = 'http://api/category/read.php';
        axios.get(url).then(response => response.data)
        .then((data) => {
            const categories = data.records;
            this.setState({ categories });
            console.log(categories);
        })
    }

/*
  componentWillMount() {
    this.getData()
  }

  getData() {
    // create a new XMLHttpRequest
    var xhr = new XMLHttpRequest()

    // get a callback when the server responds
    xhr.addEventListener('load', () => {
      // update the state of the component with the result here
      console.log(xhr.responseText)
    })
    // open the request with the verb and the url
    xhr.open('GET', 'https://dog.ceo/api/breeds/list/all')
    // send the request
    xhr.send()


    xhr.open('POST', 'https://example.com')
    xhr.send(JSON.stringify({ example: 'data' }))
  }
*/

/*
axios.post('example.com', form, {
  headers: { 'Content-Type': 'multipart/form-data' },
})
*/

/*
var url = 'https://cors-anywhere.herokuapp.com/http://sipla.cuci.udg.mx/sc/horariop.php?c=219359735&k=0d8ce4fab5f4df9ce711cae81e044e1a';
fetch(url, {
  method: 'GET',
  headers:{
    'X-Requested-With': 'XMLHttpRequest'
  }
}).then(res => res.json())
.then(response => console.log('Success:', response))
.catch(error => console.error('Error:', error));
*/

    handleFormSubmit( event ) {
        event.preventDefault();
        console.log(this.state);
        /*
        let formData = new FormData();
        formData.append('name', this.state.name);
        formData.append('description', this.state.description);
        formData.append('price', this.state.price);
        formData.append('category_id', this.state.selectedCategoryId);
        */
        var bodyFormData = new FormData();
        bodyFormData.set('name', this.state.name);
        bodyFormData.set('description', this.state.description);
        bodyFormData.set('price', this.state.price);
        bodyFormData.set('category_id', this.state.selectedCategoryId);

    /* 
        var data = {
            name: this.state.name,
            description: this.state.description,
            price : this.state.price,
            category_id : this.state.selectedCategoryId
        }
   
        console.log(data)
        fetch("http://api/product/create.php", {
            method: 'POST',
            headers: {'Content-Type': 'multipart/form-data','Accept': 'application/json','Content-Type': 'application/json'},
            body: JSON.stringify(data)
        }).then(function(response) {
            if (response.status >= 400) {
              throw new Error("Bad response from server");
            }
            return response.json();
        }).then(function(data) {
            console.log(data)    
            if(data == "success"){
               this.setState({msg: "Thanks for registering"});  
            }
        }).catch(function(err) {
            console.log(err)
        });

/**/
        axios({
            method: 'POST',
            url: 'http://api/product/create.php',
            data: bodyFormData,
            config: { headers: {
                'Content-Type': 'multipart/form-data',  
                // additional add              
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET, PUT, POST, DELETE, OPTIONS"
            }}
        })
        .then(function (response) {
            //handle success
            console.log(response)

        })
        .catch(function (response) {
            //handle error
            console.log(response)
        });

    }

    onCategoryChange(e){
        this.setState({
            selectedCategoryId: e.target.value
        });
    }

    render(){
        let categoriesOptions = this.state.categories.map(function(category){
            return (
                <option key={category.id} value={category.id}>{category.name}</option>
            );
        });

        return (
            <div className="col_6">
                <form>
                    <label>Name</label>
                    <input type="text" name="name" value={this.state.name}
                           onChange={e => this.setState({ name: e.target.value })}/>

                    <label>Description</label>
                    <input type="text" name="description" value={this.state.description}
                           onChange={e => this.setState({ description: e.target.value })}/>

                    <label>Price</label>
                    <input type="text" name="price" value={this.state.price}
                           onChange={e => this.setState({ price: e.target.value })}/>

                    <label>Category</label>
                    <select className='form-control'
                            onChange={e => this.setState({ selectedCategoryId: e.target.value })}
                            value={this.state.selectedCategoryId}>
                            <option value="-1">Select category...</option>
                            {categoriesOptions}
                    </select>

                    <input type="submit" onClick={e => this.handleFormSubmit(e)} value="Create Product" />
                </form>
            </div>);
    }

}

/*
 import React, { Component } from 'react';
 import axios from 'axios';
 import './../App.css';

 export default class extends React.Component {

 state = {
     name: '',
     email: '',
     country: '',
     city: '',
     job: '',
 };

 handleFormSubmit( event ) {
     event.preventDefault();
     console.log(this.state);
     let formData = new FormData();
     formData.append('name', this.state.name)
     formData.append('email', this.state.email)
     formData.append('city', this.state.city)
     formData.append('country', this.state.country)
     formData.append('job', this.state.job)

     axios({
         method: 'post',
         url: 'http://api/product/create.php',
         data: formData,
         config: { headers: {'Content-Type': 'multipart/form-data' }}
     })
     .then(function (response) {
         //handle success
         console.log(response)

     })
     .catch(function (response) {
         //handle error
         console.log(response)
     });
 }

 render(){
     return (
         <div className="col_6">
         <form>
             <label>Name</label>
             <input type="text" name="name" value={this.state.name}
             onChange={e => this.setState({ name: e.target.value })}/>

             <label>Email</label>
             <input type="email" name="email" value={this.state.email}
             onChange={e => this.setState({ email: e.target.value })}/>

             <label>Country</label>
             <input type="text" name="country" value={this.state.country}
             onChange={e => this.setState({ country: e.target.value })}/>

             <label>City</label>
             <input type="text" name="city" value={this.state.city}
             onChange={e => this.setState({ city: e.target.value })}/>

             <label>Job</label>
             <input type="text" name="job" value={this.state.job}
             onChange={e => this.setState({ job: e.target.value })}/>

             <input type="submit" onClick={e => this.handleFormSubmit(e)} value="Create Contact" />
         </form>
         </div>);
     }

 }
 */