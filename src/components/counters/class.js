import React, { Component } from 'react';
import './../App.css';

export default class extends React.PureComponent {

    static defaultProps = {
        min: 1,
        max: 5
    };

    state = {
        cnt: this.props.min,
        // inputValue: this.props.min.toString(),
        inputValue: this.props.min
    };

    increase = () => {
        this.set(this.state.cnt +1);
        /*
        let cnt = this.state.cnt + 1;

        // Math.min(cnt, this.props.max);

        if(cnt > this.props.max){
            cnt = this.props.max;
        }

        this.setState({cnt});
        */
    };

    decrease = () => {
        this.set(this.state.cnt -1);
        /*
        let cnt = this.state.cnt - 1;

        // Math.max(cnt, this.props.min);

        if(cnt < this.props.min){
            cnt = this.props.min;
        }

        this.setState({cnt});
        */
    };

    set(newCnt){
        let cnt = Math.min(Math.max(newCnt, this.props.min), this.props.max);
        this.setState({
            cnt,
            inputValue: cnt
        });
    }

    setValue(newStr){
        this.setState({inputValue: newStr});
        /*
        let cnt = parseInt(newStr);

        if(isNaN(cnt)){
            cnt = this.props.min;
        }

        this.set(cnt);
        */
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
            <div>
                <button onClick={this.decrease}>Minus</button>
                <strong>{this.state.cnt}</strong>
                <input value={this.state.inputValue}
                       onChange={(e) => this.setValue(e.target.value)}
                       onBlur={this.applyValue}
                       onKeyUp={this.checkEnter}
                />
                <button onClick={this.increase}>Plus</button>
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
