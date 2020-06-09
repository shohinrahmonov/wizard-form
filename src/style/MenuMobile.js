import styled from 'styled-components';

export const MenuMobile = styled.div`
position: fixed;
width: 100%;
bottom: 0;
margin: 0 -30px;
background: #000;
padding: 20px 15px;
display: flex;
justify-content: space-between;
a{
    display: inline-block;
}
button{
    border: none;
    background: transparent;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    span{
        font-size: 12px;
        padding-top: 4px;
        color: #808080;
        font-weight: bold;
        letter-spacing: 0.50px;
    }
    svg{
            fill: #808080;
            stroke:#808080;
        }
    &.active{
        svg{
            fill: #5D89FF;
            stroke: #5D89FF;
        }
        span{
            color: #fff;
        }
    }
}
a:not(:last-child){
    margin-bottom: 12px;
}
@media (max-width: 512px){
    margin: 0 -15px;
}
`;