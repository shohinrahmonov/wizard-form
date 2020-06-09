import styled from 'styled-components';

export const MobileCardsElement = styled.div`
    .ant-collapse-header{
        font-size: 16px;
        font-weight: bold;
        color: #454545;
    }
    .ant-collapse-icon-position-right > .ant-collapse-item > .ant-collapse-header .ant-collapse-arrow{
        font-size: 24px;
        color: #454545;
    }
    .blue-line{
        display: inline-block;
        background: #5D89FF;
        width: 40px;
        height: 4px;
    }
    ol{
        padding-left: 16px;
    }
    .ant-collapse-content{
        position: relative;
        svg{
            position: absolute;
            clip: rect(-5px,187px,136.5px,0);
            right: 65px;
            bottom: -34px;
        }
    }
    .ant-collapse-content-box{
        padding-bottom: 100px;
    }
    .site-collapse-custom-collapse .site-collapse-custom-panel{
        box-shadow: 16px 17px 15px -20px #000;
        border-radius: 12px;
    }
    @media(max-width: 512px){
        .ant-collapse-content{
            svg{
                right: 50%;
                transform: translateX(50%);
            }
        }
        .ant-collapse-content-box{
            padding-bottom: 136px;
        }
    }
`;