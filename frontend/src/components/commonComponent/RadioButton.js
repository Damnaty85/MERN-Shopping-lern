import React from "react";
import styled from 'styled-components'

const RadioWrapper = styled.div`
    display: inline-block;
    margin: 16px 0;
`;

const Label = styled.label`
    display: inline-block;
    min-height: 20px;
    position: relative;
    padding: 0 30px;
    margin-bottom: 0;
    cursor: pointer;
    vertical-align: bottom;
    &:before, &:after {
        position: absolute;            
        content: '';  
        border-radius: 50%;
        transition: all .3s ease;
        transition-property: transform, border-color;
        box-sizing: border-box;
    }
    &:before {
        left: 0;
        top: 0;
        width: 20px;
        height: 20px;
        border: 2px solid rgba(0, 0, 0, 0.54);
    }
    &:after {
        top: 5px;
        left: 5px;
        width: 10px;
        height: 10px;
        transform: scale(0);
        background: rgb(51, 122, 183);
    }
`;

const Radio = styled.input`
    display: none;
    @keyframes ripple {
      0% {
        box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.0);
      }
      50% { 
        box-shadow: 0px 0px 0px 15px rgba(0, 0, 0, 0.1);
      }
      100% {
        box-shadow: 0px 0px 0px 15px rgba(0, 0, 0, 0);
      }
    }
    &:checked + ${Label}:before {
        border-color: rgb(51, 122, 183);
        animation: ripple 0.2s linear forwards;   
    }
    &:checked + ${Label}:after {
        transform: scale(1);
    }
`;

const RadioButton = ({title, id, name, value, onChange}) => {
    return (
        <RadioWrapper>
            <Radio type={'radio'} id={id} name={name} value={value} onChange={onChange}/>
            <Label htmlFor={id}>{title}</Label>
        </RadioWrapper>
    );
};

export default RadioButton;
