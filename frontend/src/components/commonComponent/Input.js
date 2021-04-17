import React from 'react';
import styled from 'styled-components'

const FieldWrap = styled.div`
    position:relative; 
    margin-bottom: 15px;
    margin-top: 25px;
`;

const Highlight = styled.span`
    position:absolute;
    height:60%; 
    width:100px; 
    top:25%; 
    left:0;
    pointer-events:none;
    opacity:0.5;
`;

const LabelField = styled.label`
    color:#999; 
    font-size:14px;
    font-weight:normal;
    position:absolute;
    pointer-events:none;
    left:5px;
    top:10px;
    transition:0.2s ease all;
`;

const Bar = styled.span`
    position:relative; 
    display:block; 
    width:400px;
    &:before,
    &:after{
        content:'';
        height:2px; 
        width:0;
        bottom:1px; 
        position:absolute;
        background:#455a64;; 
        transition:0.2s ease all;
    }
    &:before {
        left:50%;
    }
    &:after {
        right:50%; 
    }
`;

const InputField = styled.input`
    font-size:14px;
    padding:10px 10px 10px 5px;
    display:block;
    width:400px;
    border:none;
    border-bottom:1px solid #757575;
    background: transparent;
    box-sizing: border-box;
    &:focus {
        outline: none;
    }
    &:focus ~ ${LabelField}, 
    &:valid ~ ${LabelField} {
        top:-10px;
        font-size:12px;
        color:#455a64;
    }
    &:focus ~ ${Highlight} {
        animation:inputHighlighter 0.3s ease;
    }
    :focus ~ ${Bar}:before, 
    &:focus ~ ${Bar}:after {
        width:50%;
    }
    @keyframes inputHighlighter {
        from { background:#5264AE; }
        to { width:0; background:transparent; }
    }
`;

function Input({ type, name, required, placeHolder, onChange }) {
    return (
        <FieldWrap>
            <InputField type={type} name={name} onChange={onChange} required={required}/>
            <Highlight/>
            <Bar/>
            <LabelField>{placeHolder}</LabelField>
        </FieldWrap>
    );
}

export default Input;
