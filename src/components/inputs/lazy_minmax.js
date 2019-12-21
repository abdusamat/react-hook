import React, { Component } from 'react';
import AppInputLazy from './lazy';
import './../App.css';

export default class extends React.PureComponent {

    static defaultProps = {
        min: 1,
        max: 5,
        cnt: 1,
        onChange: function(cnt){
            console.log(cnt);
        }
    };

    increase = () => {
        this.set(this.props.cnt +1);
    };

    decrease = () => {
        this.set(this.props.cnt -1);
    };

    set(newCnt){
        let cnt = Math.min(Math.max(newCnt, this.props.min), this.props.max);
        this.props.onChange(cnt);
    }

    onChange = (e) => {
        console.log(e.target.value);

        let cnt = parseInt(e.target.value);
        this.set(isNaN(cnt) ? this.props.min : cnt);

    };

    render() {
        return (
            <div className="inpt">
                <button onClick={this.decrease}>-</button>
                <AppInputLazy
                    nativeProps={{onChange: this.onChange}}
                    value={this.props.cnt}
                    // onChange={this.onChange}
                />
                {/*<input*/}
                    {/*value={this.props.cnt}*/}
                    {/*onChange={this.onChange}*/}
                {/*/>*/}
                <button onClick={this.increase}>+</button>
            </div>
        );
    }
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
    max: PropTypes.number.isRequired
};
*/
