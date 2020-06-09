import React from 'react';
import styled from 'styled-components';
const ButtonElement = styled.button` 
    background: #95B8D1;
    border: 0;
    border-radius: 20px;
    font-weight: bold;
    padding: 10px 20px;
    width: 160px;
    text-align: center;
    cursor: pointer;
    box-shadow: 2px 3px 13px -8px #000;
    margin-right: 15px;
    &:focus{
        border: none;
        outline: none;
    }
    &>p{
        font-size: 14px;
        display: inline-block;
        margin: 0;
        color:  #fff;
    }
    transition: .2s cubic-bezier(.22,.61,.36,1) all;
    &:hover{
        background: #5D89FF;
    }
`;


const Button = ({title, onclick}) => {
    return ( 
        <ButtonElement onClick={onclick}>
            <p>{title}</p>
        </ButtonElement>
     );
}
 
export default Button;