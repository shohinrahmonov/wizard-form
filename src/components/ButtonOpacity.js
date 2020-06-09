import React from 'react';
import styled from 'styled-components';

const ButtonElement = styled.button` 
    background: transparent;
    border: 1px solid #5D89FF;
    border-radius: 4px;
    font-weight: bold;
    padding: 10px 20px;
    display: flex;
    color: #5D89FF;
    align-items: center;
    cursor: pointer;
    &:focus{
        border-radius: 4px;
        outline: none;
    }
    &>p{
        font-size: 14px;
        display: inline-block;
        margin: 0;
        color: #5D89FF;
    }
    &>.anticon-upload{
        display: none;
    }
    &>span{
        font-size: 18px;
        padding-left: 8px;
        margin-left: auto;
        color: #5D89FF;
    }
    transition: .2s cubic-bezier(.22,.61,.36,1) all;
    &:hover{
        background: ${prop => prop.hover ? "#5D89FF" : ''};
        span{
            color:  ${prop=> prop.hover ? 'white' : ''};
        }
        p{
            margin: 0;
            color:  ${prop=> prop.hover ? 'white': ''};
        }
    }
`;


const Button = ({children}) => {
    return ( 
        <ButtonElement onClick={(e)=>e.preventDefault()}>
            {children}
        </ButtonElement>
     );
}
 
export default Button;