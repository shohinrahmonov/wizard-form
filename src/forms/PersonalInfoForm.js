import React, { useState, useEffect } from 'react';
import BoxTemplate from '../components/BoxTemplate';
import { Form, Input, DatePicker, Radio, Button, Select, Checkbox} from 'antd';
import ButtonPrimary from '../components/Button'
import { PlusOutlined } from '@ant-design/icons';
import moment from 'moment'
import { CountryRegionData } from 'react-country-region-selector';

const PersonalInfoForm = ({handleFormDataComplete, data}) => {
    const {Option} = Select;
    const [form] = Form.useForm();
    
    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16}
    };
      
    const [checked, setChecked] = useState(false);

    useEffect(() => {
            const  dataIWantToFillFormWithEng = {phones:[{}]};
            Object.keys(form.getFieldsValue()).forEach(key => {
                const obj = {};
                obj[key] = dataIWantToFillFormWithEng[key] || null;
                form.setFieldsValue(obj)
            });
            data && data.map(item=>{form.setFieldsValue(item)});
            form.setFieldsValue({
                checkPermenant: false
            });
            
    }, [form]);
    
      const onFinish = values => {
        handleFormDataComplete(1, values);
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
        }
      };
    

      const formItemLayout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 24}
      };

      const config = {
        rules: [{ type: 'object', required: true}],
      };

      const ageHandler = (value)=>{
          if(value === null) return;
            var momentObj = moment(form.getFieldValue('dob')._d);

            var momentString = parseInt(momentObj.format('YYYY'));
            
            let age = value ?  moment().year() - momentString : null;
        
            form.setFieldsValue({age});
      }
    
      const samePermenantHandler =(e)=>{
        setChecked(!checked);
      }

      const datapickerHandler = (e)=>{
      }
    return ( 
        <BoxTemplate>
            <h2>Personal Information</h2> 
            <Form {...layout} form={form} name="control-hooks"   onFinish={onFinish} validateMessages={validateMessages}>
                <Form.Item name="fullname" label="Name (as per ID/Passport)"  rules={[{ required: true, max: 50, pattern:/^[a-zA-Z]+$/}]} >
                    <Input placeholder="Please State your Full Name" />
                </Form.Item>
                <Form.Item name="passport" label="ID/Passport No." rules={[{ required: true, max: 10, pattern:/^\S*$/ }]}>
                    <Input placeholder="Please State your ID/Passport No." />
                </Form.Item>
                <Form.Item name="placeOfBirth" label="Place of Birth" rules={[{required: true,  max: 100, pattern:/^[a-zA-Z]+$/ }]}>
                    <Input placeholder="Please State your Place of Birth" />
                </Form.Item>
                <Form.Item name="nationality"  label="Nationality" rules={[{ required: true}]}>
                    <Select placeholder="Please State your Nationality" allowClear>
                        {CountryRegionData.map(country=> <Option key={country[1]} value={country[1]}>{country[0]}</Option>)}
                    </Select>
                </Form.Item>
                <Form.Item name="dob" onChange={datapickerHandler} label="Date of Birth" {...config}>
                    <DatePicker format={'DD/MM/YYYY'}  disabledDate={d => !d || d.isAfter("2002-12-31") || d.isSameOrBefore("12/31/1970") } placeholder="Please Select your Date of Birth" defaultPickerValue={moment("31/12/2002", 'DD/MM/YYYY')}  onChange={value=>ageHandler(value)}  showToday={false} />
                </Form.Item>
                <Form.Item name="age" label="Age" rules={[{required: true}]}>
                    <Input placeholder="Please State your Age"  disabled/>
                </Form.Item>
                <Form.Item name="religion" label="Religion" rules={[{required: true }]}>
                    <Input placeholder="Please State your Religion" />
                </Form.Item>
                <Form.Item name="gender" label="Gender" rules={[{required: true }]}>
                    <Radio.Group>
                        <Radio value="male">Male</Radio>
                        <Radio value="female">Femaile</Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item name="currentAddress" label="Current Address" rules={[{required: true, max: 100, pattern:/^[a-zA-Z]+$/ }]}>
                    <Input placeholder="Please State your Current Address" />
                </Form.Item>
                <Form.Item name="currentAddressPostcode" label="Current Address Postcode" rules={[{required: true, max: 20, pattern:/^[a-zA-Z]+$/ }]}>
                    <Input placeholder="Please State your Current Address Postcode" />
                </Form.Item>
                <Form.Item name="checkPermenant"  valuePropName="checked">
                    <Checkbox
                        value={checked}
                        checked={checked}
                        onChange={samePermenantHandler}>
                        Check if permanent address is same as current address
                    </Checkbox>
                </Form.Item>
                <Form.Item
                    noStyle
                    shouldUpdate={(prevValues, currentValues) => prevValues.checkPermenant !== currentValues.checkPermenant}
                >
                    {({ getFieldValue }) => {
                    return getFieldValue('checkPermenant') === false ? (
                        <>
                            <Form.Item name="permanentAddress" label="Permanent Address" rules={[{ required: true, max: 100, pattern:/^[a-zA-Z]+$/ }]}>
                                <Input placeholder="Please State your Permanent Address"/>
                            </Form.Item>
                            <Form.Item name="permanentAddressPostcode" label="Permanent Address Postcode" rules={[{required: true, max: 20, pattern:/^[a-zA-Z]+$/ }]}>
                                <Input placeholder="Please State your Permanent Address Postcode" />
                            </Form.Item>
                        </>
                    ) : null;
                    }}
                </Form.Item>
                <Form.List name="phones" >
                    {(fields, { add, remove }) => {

                    return (
                        <div>
                        {fields.map((field, index) => (
                            <Form.Item
                            {...formItemLayout}
                            label="Telephone No."
                            key={field.key}
                            >
                            <Form.Item
                                {...field}
                                validateTrigger={['onChange', 'onBlur']}
                                name={[field.name, "phonenumber"]}
                                rules={[
                                {
                                    required: true,
                                    max: 20,
                                    pattern:/^[a-zA-Z]+$/
                                },
                                ]}
                                noStyle
                            >
                                <Input placeholder="Please include Country & Area Code" className="dynamic-field-phone" />
                            </Form.Item>
                            {fields.length > 1 ? (
                                <Button
                                type="default"
                                className="delete-button"
                                onClick={() => {
                                    remove(field.name);
                                }}
                                style={{ marginLeft: '8px' }}
                                >
                                Remove
                            </Button>
                            ) : <Button
                            type="default"
                            className="add-field"
                            onClick={() => {
                                add();
                            }}
                            style={{ marginLeft: '8px' }}
                            >
                            <PlusOutlined /> Add field
                            </Button>}
                            </Form.Item>
                        ))}
                        </div>
                    );
                    }}
                </Form.List>

                <Form.Item name="email" label="Email" rules={[{required: true, type: 'email', max: 50 }]}>
                    <Input placeholder="Please State your Email Address" />
                </Form.Item>
                <Form.Item className="form-tail">
                        <ButtonPrimary htmlType="submit" color="#5D89FF" title="Proceed"/>
                </Form.Item>
            </Form>
        </BoxTemplate>
     );
}
 
export default PersonalInfoForm;