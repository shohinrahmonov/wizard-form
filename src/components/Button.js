import React from 'react';
import styled from 'styled-components';
import RightCircleFilled from '@ant-design/icons/RightCircleFilled'
const ButtonElement = styled.button` 
    background: ${prop=> prop.color ? prop.color: 'white'};
    border: 0;
    border-radius: 20px;
    font-weight: bold;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    cursor: pointer;
    box-shadow: 2px 3px 13px -8px #000;
    &:focus{
        border: none;
        outline: none;
    }
    &>p{
        font-size: 14px;
        display: inline-block;
        margin: 0;
        color:  ${prop=> prop.color ? 'white': 'black'};
    }
    &>span{
        font-size: 18px;
        padding-left: 8px;
        margin-left: auto;
        color:  ${prop=> prop.color ? 'white': '#D0D0D0'};
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


const Button = ({title, onclick, color, hover, classComponent}) => {
    return ( 
        <ButtonElement className={classComponent} onClick={onclick} color={color} hover={hover}>
            <p>{title}</p>
            <RightCircleFilled />
        </ButtonElement>
     );
}
 
export default Button;