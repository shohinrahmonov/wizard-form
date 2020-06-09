import React from 'react';
import styled from 'styled-components';
import LeftCircleOutlined from '@ant-design/icons/LeftCircleOutlined'

const BackButtonElement = styled.button` 
    background: transparent;
    border: 0;
    font-weight: bold;
    padding: 10px 0;
    display: flex;
    align-items: center;
    cursor: pointer;
    &:focus{
        border: none;
        outline: none;
    }
    p{
        font-size: 14px;
        display: inline-block;
        margin: 0;
        color: #fff;
    }
    span{
        font-size: 18px;
        color: #fff;
        padding-right: 15px;
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


const BackButton = ({title, onclick, classComponent}) => {
    return ( 
        <BackButtonElement className={classComponent} onClick={onclick}>
            <LeftCircleOutlined />
            <p>{title}</p>
        </BackButtonElement>
     );
}
 
export default BackButton;