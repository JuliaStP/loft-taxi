import React from 'react';

const Input = (props) => {
    let className;
    props.class ? (className = ' ' + props.class) : (className = '');
    const changeHandler = (e) => {
        props.changeHandler({ name: props.name, value: e.target.value });
    };
    return (
        <div className={'input' + className}>
            <label>{props.label}</label>
            <input
                type={props.type}
                name={props.name}
                onChange={changeHandler}
            />
        </div>
    );
};

export default Input;