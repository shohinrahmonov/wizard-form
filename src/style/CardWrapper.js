import styled from 'styled-components';

export const CardWrapper = styled.div` 
    background: #fff;
    color: #000;
    border-radius: 10px;
    padding: 40px;
    min-height: 445px;
    box-shadow: 8px 4px 25px -3px;
    border: none;
    font-size: 1.6rem;
    position: relative;
    margin-bottom: 4.6rem;
    h2{
        font-size: 1.8rem;
        font-weight: bold;
    }
    span{
        display: inline-block;
        background: #5D89FF;
        width: 40px;
        height: 4px;
    }
    p{
        color: #808080;
        padding-top: 1rem;
    }
    ol{
        padding-left: 16px;
    }
    li{
        color: #808080;
    }
    svg{
        position: absolute;
        clip: rect(-5px,187px,136px,0);
        right: 65px;
        bottom: -34px;
    }
`;