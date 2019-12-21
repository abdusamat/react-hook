import React, { Component } from 'react';
import './../App.css';

export default class extends React.PureComponent {

    static defaultProps = {
        onChange: function(e){
            console.log(e);
        },
        nativeProps: {}
    }

    nativeInput = React.createRef();

    componentDidUpdate(prevProps, prevState){
        let inp = this.nativeInput.current;

        if(prevProps.value !== this.props.value || this.props.value != inp.value){
            inp.value = this.props.value;
            console.log('upd');
        }
    }

    checkEnter = (e) => {
        if(e.keyCode === 13){
            this.checkChange(e);
        }
    }

    checkChange = (e) => {
        // console.log(this.props.value);
        // console.log(e.target.value);
        if(this.props.value.toString() !== e.target.value){
            this.props.onChange(e);
        }
    }

    render() {
        return (
            <div className="">
                <input {...this.props.nativeProps}
                       defaultValue={this.props.value}
                       onBlur={this.checkChange}
                       onKeyUp={this.checkEnter}
                       ref={this.nativeInput}
                />
            </div>
        );
    }
}
