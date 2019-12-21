import React, { Component } from 'react';
import './../App.css';
// import AppMinMax from './minmax';
import AppMinMax from './lazy_minmax';

export default class extends React.PureComponent {

    state = {
        products: getProducts(),
        formDone: false
    };

    changeCnt(i, cnt){
        // изменит напрямую нельзя current this.state.products[i].current = cnt
        console.log(i, cnt);
        let newProducts = [...this.state.products];
        console.log(newProducts);
        console.log(['chech',{...newProducts[i]}]);
        let newProduct = {...newProducts[i]};
        console.log(newProduct);
        newProduct.current = cnt;
        newProducts[i] = newProduct;
        this.setState({products: newProducts});
        console.log(newProducts);
    }

    total(){
        let summ = 0;
        for (let i = 0; i < this.state.products.length; i++) {
            summ += this.state.products[i].price * this.state.products[i].current;
        }
        return summ;
    }

    removeProduct(id){
        let products = [...this.state.products];
        let newProducts = products.filter(product => product.id !== id);
        // let newProducts = [...this.state.products].filter(product => product.id !== id);
        // let newProducts = products;
        this.setState({products: newProducts});
        /*
        let products = [...this.state.products];
        products.splice(id,1);
        this.setState({products});
        */
    }

    sendForm = () => {
        this.setState({formDone: true});
    }

    render() {

        let produtsRows = this.state.products.map((product, i) => {
            console.log(product, i);

            return (
                <tr key={i}>
                    <td>{product.title}</td>
                    <td>{product.price}</td>
                    <td>
                        <AppMinMax min={1}
                                    max={product.rest}
                                    cnt={product.current}
                                    onChange={(cnt) => this.changeCnt(i, cnt)}
                        />
                    </td>
                    <td>{product.price * product.current}</td>
                    <td><button onClick={() => this.removeProduct(product.id)}>Remove</button></td>
                </tr>
            );
        });

        let sum = 0;
        this.state.products.forEach((el) => {
            sum += el.price * el.current;
        });

        let summa = this.state.products.reduce((summa, product) => {
            return summa + (product.price * product.current);
        },0);

        let summ = 0;
        for (let i = 0; i < this.state.products.length; i++) {
            summ += this.state.products[i].price * this.state.products[i].current;
        }

        let page = this.state.formDone ? showCongrats() : showForm(produtsRows,this);

        return (
            <div>
                <hr/>
                {page}
            </div>
        );
    }
}

function showForm(produtsRows,self){
    return (
        <div className="React-Fragment">
            <h3>Cart</h3>
            <button onClick={self.sendForm}>Send</button>
            <table border="1">
                <tbody>
                <tr style={{textAlign: 'center'}}>
                    <td>Title</td>
                    <td>Price</td>
                    <td>Count</td>
                    <td>Total</td>
                    <td>Action</td>
                </tr>
                {produtsRows}
                <tr>
                    <td>Summ</td>
                    <td></td>
                    <td></td>
                    <td>{self.total()}</td>
                    <td></td>
                </tr>
                </tbody>
            </table>
            <button onClick={() => self.changeCnt(1,4)}>Unreal change cnt</button>
        </div>
    )
}

function showCongrats(){
    return (
        <React.Fragment>
            <h2>Congratulations! Your order in process!</h2>
        </React.Fragment>
    )
}

function getProducts(){
    return [
            {
                id: 100,
                title: 'Iphone 8',
                price: 50000,
                rest: 10,
                current: 1
            },
            {
                id: 101,
                title: 'Samsung S8',
                price: 30000,
                rest: 5,
                current: 1
            },
            {
                id: 102,
                title: 'Nokia 6300',
                price: 10000,
                rest: 15,
                current: 1
            },
            {
                id: 103,
                title: 'Xiaomi A300',
                price: 20000,
                rest: 12,
                current: 1
            },
        ];
}

/*
Some.defaultProps = {
    min: 1,
    max: 5
};
*/
/*
Some.propTypes = {
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    cnt: PropTypes.number.isRequired,
};
*/
