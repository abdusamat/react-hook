import React, { Component } from 'react';
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

    state = {
        inputValue: this.props.cnt
    };

    componentDidUpdate(prevProps, prevState){
        console.log(prevProps);
        console.log(this.props);
        if(prevProps.cnt !== this.props.cnt){
            this.setState({inputValue: this.props.cnt});
        }
    }

    increase = () => {
        this.set(this.props.cnt +1);
    };

    decrease = () => {
        this.set(this.props.cnt -1);
    };

    set(newCnt){
        let cnt = Math.min(Math.max(newCnt, this.props.min), this.props.max);
        this.setState({
            inputValue: cnt
        });
        this.props.onChange(cnt);
    }

    setValue(newStr){
        this.setState({inputValue: newStr});
    }

    applyValue = () => {
        let cnt = parseInt(this.state.inputValue);
        this.set(isNaN(cnt) ? this.props.min : cnt);
    };

    checkEnter = (e) => {
        if(e.keyCode === 13){
            this.applyValue();
        }
    };

    render() {
        return (
            <div className="inpt">
                <button onClick={this.decrease}>-</button>
                <input value={this.state.inputValue}
                       onChange={(e) => this.setValue(e.target.value)}
                       onBlur={this.applyValue}
                       onKeyUp={this.checkEnter}
                />
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
