import styled from 'styled-components';

export const FormWrapper = styled.div`
    max-width: 117rem;
    margin: auto;
    padding: 20px 30px;
    color: #fff;
    .row{
        display: flex;
        justify-content: space-between;
    }
    .left-container{
        width: 32%;
        padding-right: 80px;
    }
    .right-container{
        width: 68%;
    }
    .image-container{
        padding-top: 6rem;
        display: flex;
        align-items: center;
        img{
            height: 32px;
        }
    }
    .left-top-contaner{
        color: #fff;
        h1{
            font-size: 3.6rem;
            font-weight: bold;
            color: #fff;
            padding-top: 3rem;
            line-height: 42px;
        }
        &>p{
            font-size: 1.6rem;
            color: #AFAFAF;
            padding-bottom: 30px;
            margin-bottom: 0;
        }
    }
    .student-id{
        margin-left: auto;
        line-height: 1.3;
        display: flex;
        flex-direction: column;
        p{
            font-size: 2rem;
            color: #fff;
            font-weight: bold;
        }
        span{
            font-size: 12px;
            color: #CBCBCB !important;
            text-align: right;
        }
    }
    .btn-group-container{
        display: flex;
        flex-direction: column;
        &>a{
            text-decoration: none;
            button{
                width: 265px;
            }
        }
    }
    .recaptcha-goog{
        padding-top: 20px;
        padding-bottom: 70px;
    }
    @media (max-width: 950px) {
        .row{
            flex-direction: column;
            margin-bottom: 115px;
        }
        .left-container{
            width: 100%;
            padding-right: 0;
            padding-bottom: 40px;
        }
        .right-container{
            width: 100%;
        }
        .btn-group-container{
            &>a{
                button{
                    width: 100%;
                }
            }
        }
    }
    @media (max-width: 768px) {
        .student-id{
            display: none;
        }
    }
    @media (max-width: 512px) {
        padding: 0 15px;
    }
`;
