import React, { useState } from 'react';
import './../App.css';

export default function (props){

    console.log(useState(0));

    let [cnt,setCnt] = useState(0);
    let [other,setOther] = useState(10);

    let increase = () => {
        setCnt(cnt + 1);
        setOther(Math.random());
    };

    let decrease = () => {
        setCnt(cnt - 1);
        setOther(Math.random());
    };

    /*  // setCnt(cnt + 1);
    setSnt(cnt){
        this.setState({
            cnt
        });
    }
    */

    return (
        <div>
            <b>{other}</b><br/>
            <button onClick={decrease}>Minus</button>
            <strong>{cnt}</strong>
            <button onClick={increase}>Plus</button>
        </div>
    );
}
