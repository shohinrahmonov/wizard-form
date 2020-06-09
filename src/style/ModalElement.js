import styled from 'styled-components';

export const ModalElement = styled.div`
    z-index: 1000;
    position: fixed;
    width: 100%;
    left: 0;
    top: 0;
    background-color: rgba(0,0,0, .8);
    height: 100%;
    overflow: hidden;
    .box-content-modal{
        z-index: 1001;
        position: absolute;
        left: 50%;
        top: 50%;
        color: #000;
        transform: translate(-50%,-50%);
        background: #fff;
        max-width: 820px;
        width: 80%;
        max-height: 640px;
        border-radius: 10px;
        padding: 40px;
    }
    .form-tail-modal{
        padding-top: 14px;
        margin-bottom: 0;
        .ant-col-8{
            max-width: 100%;
        }
        .ant-form-item-control-input-content{
            flex: unset;
            margin-left: auto;
        }
        button{
            margin-left: auto;
            margin-right: 0;
        }
    }
    .text-top-container{
        padding-bottom: 8rem;
        h1{
            font-size: 2.8rem;
            font-weight: bold;
            margin-bottom: 0;
            color: #454545;
        }
        p{
            font-size: 1.6rem;
            color: #808080;
            margin-bottom: 0;
            padding-bottom: 34px;
            padding-top: 40px;
        }
        span{
            font-size: 1.6rem;
            font-weight: bold;
            color: #454545;
        }
    }
    .application-info{
        padding-bottom: 5rem;
        line-height: 1;
        span{
            font-size: 16px;
            color: #808080;
        }
        h2{
            font-weight: bold;
            font-size: 3.6rem;
            margin-bottom: 5px;
            color: #454545;
        }
        p{
            font-size: 16px;
            color: #5D89FF;
        }
    }
    @media(max-width: 768px){
        .box-content-modal{
            padding: 20px;
            max-height: 586px;
        }
        .form-tail-modal{
            padding-top: 80px;
            .ant-form-item-control-input-content{
                width: 100%;
            }
            button{
                width: 100%;
            }
        }
        .box-content-modal{
            width: 92%;
        }
        .application-info {
            h2{
                font-size: 24px;
            }
            p{
                font-size: 14px;
            }
            span{
                font-size: 14px;
            }
        }
        .text-top-container{
            h1{
                font-size: 24px;
            }
            p{
                font-size: 14px;
                padding-top: 20px;
                padding-bottom: 20px;
            }
            span{
                font-size: 14px;
            }
        }
        .application-info{
            padding-bottom: 4rem;
        }
        .text-top-container {
            padding-bottom: 6rem;
        } 
    }
    @media(max-width: 512px){
        .box-content-modal{
        }
        .form-tail-modal{
            padding-top: 15px;
        }
    }
`;