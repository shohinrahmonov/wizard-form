import React from 'react';
import BoxTemplate from '../components/BoxTemplate';
import { Form } from 'antd';
import ButtonPrimary from '../components/Button'
import { useHistory } from 'react-router-dom';


const Result = ({data}) => {
    const [form] = Form.useForm();
    const location = useHistory();
     
    const onFinish = values => {
        location.push('/')
    };
    
    console.log(data);
    
    return ( 
        <BoxTemplate>
            <h2>Thank You!</h2>
            <Form form={form} name="control-hooks" onFinish={onFinish} >
                <div className="declaration">
                    <p>We've submitted your application for processing and hoped to lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <Form.Item className="form-tail-two">
                        <ButtonPrimary htmlType="submit" color="#5D89FF" title="Back to Dashboard"/>
                </Form.Item>
            </Form>
        </BoxTemplate>
     );
}
 
export default Result;