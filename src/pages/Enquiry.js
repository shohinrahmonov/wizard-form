import React from 'react';
import Background from '../components/Background';
import Button from '../components/BackButton'
import ButtonPrimary from '../components/Button'
import { Link, useHistory } from 'react-router-dom';
import Menu from '../components/Menu'
import BoxTemplate from '../components/BoxTemplate'
import { Form, Input, Select, Checkbox, } from 'antd';
import { CountryRegionData } from 'react-country-region-selector';
import { EnquiryWrapper } from '../style/EnquiryWrapper';

     
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16}
  };

    const Enquiry = () => {
        let history = useHistory();
        const [form] = Form.useForm();

        const onFinish = values => {
            history.push('/');
        };
        
      const onFill = () => {
        form.setFieldsValue({
          id: '21213123123123'
        });
      };

      const validateMessages = {
        required: 'Field is required!',
        types: {
          email: 'Please enter a valid email address!',
          number: 'Please enter a valid number.',
          len: "Please enter at least 8 characters.",
        },
        pattern: {
            mismatch: 'No special character and space allowed!'
        },
        string: {
            range: 'Phone number must be between ${min} and ${max}',
        },
        number: {
            range: 'Phone number must be between ${min} and ${max}',
        }
      };
  
      const {Option} = Select;

      const prefixSelector = (
        <Form.Item name="prefix" noStyle initialValue="+85" rules={[{required: true}]}>
          <Select style={{ width: 90 }}>
            <Option value="85">+85</Option>
            <Option value="87">+87</Option>
          </Select>
        </Form.Item>
      );
      const tailFormItemLayout = {
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0,
          },
          sm: {
            span: 16,
            offset: 8,
          },
        },
      };

    return ( 
        <>
            <Background />
            <EnquiryWrapper>
                <div className="row">
                    <div className="left-container">
                        <div className="left-top-contaner">
                            <h1>Online<br/> Registration</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                            <div className="btn-group-container">
                                <Link to="/">
                                    <Button title="Back to Dashboard" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="right-container">
                        <BoxTemplate>
                            <h2>Send an enquiry</h2> 
                            <Form {...layout} form={form} name="enquiry-form" onFinish={onFinish} validateMessages={validateMessages}>
                                <Form.Item name="fullname" label="Full name"  rules={[{ required: true, max: 50, pattern:/^[a-zA-Z]+$/}]} >
                                    <Input placeholder="Please State your Full Name" />
                                </Form.Item>
                                <Form.Item name="email" label="Email" rules={[{required: true, type: 'email', max: 50 }]}>
                                    <Input placeholder="Please State your Email Address" />
                                </Form.Item>
                                <Form.Item name="nationality"  label="Nationality" rules={[{ required: true}]}>
                                    <Select placeholder="I'm from" allowClear>
                                        {CountryRegionData.map(country=> <Option key={country[1]} value={country[1]}>{country[0]}</Option>)}
                                    </Select>
                                </Form.Item>
                                <Form.Item
                                    name="phone"
                                    label="Phone Number"
                                    rules={[{ required: true, min: 8, max: 10 },({ getFieldValue }) => ({
                                        validator(rule, value) {
                                        if (!value || value.match(/^[-+]?[0-9]+$/) ) {
                                            return Promise.resolve();
                                        }
                                        return Promise.reject('Please enter a valid number!');
                                        },
                                    }),]}
                                >
                                    <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
                                </Form.Item>
                                <Form.Item name="message" label="Ask us anything" rules={[{required: true }]}>
                                    <Input.TextArea placeholder="Please State your message" />
                                </Form.Item>
                                <Form.Item
                                    name="agreement"
                                    valuePropName="checked"
                                    rules={[
                                    { validator:(_, value) => value ? Promise.resolve() : Promise.reject('Please accept the Terms of Use & Privacy Policy') },
                                    ]}
                                    {...tailFormItemLayout}
                                >
                                    <Checkbox>
                                    I agree to<a href="#">Terms of Use</a> &  <a href="#">Privacy Policy</a>
                                    </Checkbox>
                                </Form.Item>
                                <Form.Item className="form-tail">
                                        <ButtonPrimary htmlType="submit" color="#5D89FF" title="Proceed"/>
                                </Form.Item>
                            </Form>
                        </BoxTemplate>
                    </div>
                </div>
                <Menu />
            </EnquiryWrapper>
        </>
     );
}
 
export default Enquiry;