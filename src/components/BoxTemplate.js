import React from 'react';
import styled from 'styled-components';

const BoxElement = styled.div` 
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
    &>h2{
        font-size: 2.8rem;
        font-weight: bold;
        margin-bottom: 1.5rem;
    }
    &>p{
        font-size: 16px;
        color: #808080;
        padding-top: 1rem;
    }
    &>ol{
        padding-left: 16px;
    }
    &>li{
        color: #808080;
    }
   .ant-form-item-label > label{
        font-size: 14px;
        font-weight: bold;
    }
    .ant-tooltip-placement-top{
        display: none;
    }
   .ant-form-item-label{
        text-align: left;
        display: flex;
       .ant-form-item-required{
           font-size: 14px;
           font-weight: bold;
           &::before{
               display: none;
           }
       }
   }
   form{
       display: flex;
       flex-direction: column;
       height: 100%;
       min-height: 335px;
   }
   .sub-text-label{
        position: absolute;
        left: 0;
        width: 200px;
        font-size: 12px;
        top: 152px;
   }
   .sub-text-label-pri{
        position: absolute;
        left: 0;
        width: 200px;
        font-size: 12px;
        bottom: 68px;
   }
   #control-hooks{
       position: relative;
   }
   #control-hooks_gender{
       width: 100%;
   }
   .ant-radio-group .ant-radio-wrapper{
       width: 47%;
       margin-bottom: 10px;
   }
  .ant-radio-inner::after{
       transform: unset;
       background-color: unset;
   }
   .ant-radio-inner:after {
        position: absolute;
        top: 0;
        left: 5px;
        display: table;
        width: 8px;
        height: 14px;
        transition: all 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);
        content: ' ';
        border-bottom: 3px solid #5D89FF;
        border-right: 3px solid #5D89FF;
        transform: rotate(43deg);
    }
    .ant-checkbox-wrapper:hover .ant-checkbox-inner, .ant-checkbox:hover .ant-checkbox-inner{
        border-color: #d9d9d9;
    }
    .ant-checkbox-checked .ant-checkbox-inner{
        background: transparent;
    }
    .ant-checkbox-checked .ant-checkbox-inner::after{
        border-color: #5D89FF;
    }
    .ant-checkbox-checked::after{
        border-color: #5D89FF;
    }
    .ant-radio-inner {
        position: relative;
        top: 0;
        left: 0;
        display: block;
        width: 20px;
        height: 19px;
        background-color: #fff;
        border-color: #d9d9d9;
        border-style: solid;
        border-width: 1px;
        border-radius: 0;
        -webkit-transition: all 0.3s;
        transition: all 0.3s;
    }
    .add-field{
        border: none;
        color: #5D89FF;
    }
    .delete-button{
        border: none;
        color: red;
    }
    #control-hooks_course-type{
        margin-bottom: -10px;
    }
    #control-hooks_about-us{
        margin-bottom: -10px;
    }
    .form-tail-two{
        margin-top: auto;
        padding-top: 20px;
        &.ant-form-item{
            margin-bottom: 0;
        }
        .ant-col-16{
            max-width: 100%;
        }
        .ant-form-item-control-input-content{
            margin-left: auto;
            flex: unset;
            display: flex;
            flex-direction: row-reverse;
        }

    }
    .form-tail{
        padding-top: 50px;
        .ant-col-16{
            max-width: 100%;
        }
        button{
            margin-left: auto;
        }
    }
    .dynamic-field-phone{
        width: 70%;
    }
    .academic-school{
        .ant-form-item-control{
            margin-left: auto;
        }
    }
    .sub-text-label-pdf{
        position: absolute;
        top: 142px;
        font-size: 12px;
    }
    .label-remove{
        .ant-form-item-required::after{
            display: none;
        }
    }
    .btn-add{
        margin-bottom: 0;
    }
    .btn-add-btn{
        margin-bottom: 0;
        margin-top: -26px;
    }
    .inline-paragraph{
        font-size: 16px;
        margin-bottom: 40px;
        margin-top: 14px;
    }
    .terms-condtion-section{
        &:not(:last-child){
            padding-bottom: 3rem;
        }
        p{
            margin-bottom: 2rem;
            font-weight: bold;
            font-size: 16px;
            color: #454545;
        }
        ol{
            padding-left: 15px;
            margin-bottom: 0;
        }
        li:not(:last-child){
            margin-bottom: 2rem;
        }
        li{
            font-size: 16px;
            color: #808080;
        }
    }
    .declaration{
        p{
            color: #808080;
            font-size: 16px;
        }
        .last-p{
            padding-top: 26px;
            a{
                color: #5D89FF;
            }
        }
    }
    .ant-picker{
        width: 100%;
    }
    .application-fee{
        font-size: 20px;
        font-weight: bold;
    }
    @media(max-width: 1024px){
        padding: 24px;
        .dynamic-field-phone{
            width: 68%;
        }
    }
    @media(max-width: 512px){
        padding: 18px;
        .application-fee{
           font-size: 18px;
        }
        .btn-add-btn{
            margin-top: -10px;
        }
        &>h2{
            font-size: 16px;
        }
        &>p{
            font-size: 14px;
        }
        .inline-paragraph{
            font-size: 14px;
        }
        .sub-text-label-pdf{
            display: none;
        }
        #control-hooks_course-type{
            .ant-radio-wrapper{
                width: 50%
            }
        }
        .dynamic-field-phone{
            width: 62%;
        }
        .sub-text-label{
            display: none;
        }

        .sub-text-label-pri{
            display: none;
        }
        .ant-form-item{
            margin-bottom: 4px;
        }
    }
`;


const BoxTemplate = ({children}) => {
    return ( 
        <BoxElement>
            {children}
        </BoxElement>
     );
}
 
export default BoxTemplate;