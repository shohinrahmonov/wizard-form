import styled from 'styled-components';

export const MenuElementForm = styled.div`
    position: fixed;
    bottom: 42px;
    width: 22%;
    a{
        display: inline-block;
        button{
            width: 265px;
            &.active{
                background: #5D89FF;
                p, span{
                    color: #fff;
                }
            }

        }
    }
    .ant-steps-item-content{
        display: flex;
        flex-direction: column-reverse;
        width: 290px;
        .ant-steps-item-description{
            padding-bottom: 3px;
        }
    }
    .ant-steps-item-title{
        font-weight: bold;
    }
    .ant-steps-item-finish{
        .ant-steps-item-title{
            color: #000 !important;
        }
        .ant-steps-item-description{
            color: #000 !important;
        }
        .ant-steps-icon-dot{
            display: none;
        }
        .ant-steps-item-tail{
            display: none !important;
        }
    }
    .ant-steps-item-active{
        .ant-steps-item-title{
            color: #5D89FF !important;
        }
        .ant-steps-item-description{
            color: #5D89FF !important;
        }
        .ant-steps-item-icon{
            padding-right: 12px;
        }
        .ant-steps-icon-dot{
            width: 23px;
            height: 6px;
            border-radius: unset;
            top: 8px;
        }
        .ant-steps-item-container{
            transform: translateX(10px);
        }
    }
    .ant-steps-item-wait{
        .ant-steps-icon-dot{
            display: none;
        }
    }
    .ant-steps{
        line-height: 0.5;
    }
    a:not(:last-child){
        margin-bottom: 12px;
    }
    .ant-steps-vertical.ant-steps-dot .ant-steps-item > .ant-steps-item-container > .ant-steps-item-tail{
        display: none;
    }
    @media (max-width: 1024px){
        bottom: 5px;
        width: 35%;
        .ant-steps-item-active{
            .ant-steps-item-icon{
                top: 5px;
            }
        }
        .ant-steps-item-container .ant-steps-item-content {
            .ant-steps-item-description{
                font-size: 12px;
            }
            .ant-steps-item-title{
                font-size: 13px;
            }
        }
    }
`;

export const MenuMobile = styled.div`
position: fixed;
width: 100%;
bottom: 0;
margin: 0 -30px;
background: #000;
padding: 10px 15px;
display: flex;
justify-content: space-between;
.title-drawer-header{
    display: flex;
    align-items: center;
    button{
        padding-left: 0;
        .anticon-menu{
            font-size: 19px;
        }
        svg{
            fill: #fff;
        }
    }
    h1{
        color: #fff;
        margin-bottom: 0;
        font-size: 14px;
    }
    .text-container{
        line-height: 1.3;
        span{
            color: #5D89FF;
            font-weight: bold;
            font-size: 10px;
        }
    }
}
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