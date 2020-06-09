import React, {useState, useEffect} from 'react';
import BoxTemplate from '../components/BoxTemplate';
import { Form, Upload, message, Radio, Select } from 'antd';
import ButtonPrimary from '../components/Button'
import ButtonOpacity from '../components/ButtonOpacity'
import ButtonRegular from '../components/ButtonRegular'
import { UploadOutlined } from '@ant-design/icons';



const PrelimnaryInfoForm = ({handleFormDataComplete, handleBack, data}) => {
    const [form] = Form.useForm();
    const [state, setState] = useState([])

    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16}
      };

      const onFinish = values => {
        handleFormDataComplete(2, values);
      };
      const onBackHandler =() => {
        handleBack(1);
      };
    
      useEffect(() => {
        data && data.map(item=>{form.setFieldsValue(item)});
      }, [form]);

      const validateMessages = {
        required: 'Field is required!',
        types: {
          email: '${label} is not validate email!'
        }
      };
      const uploadProps = {
        name: 'file',
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        headers: {
          authorization: 'authorization-text',
        },
        multiple: true,
        accept: ".jpg,.png, .jpeg,",
      };
      const normFile = e => {
        let fileList = e.fileList;
        fileList = fileList.slice(-1);
        
        fileList = fileList.map(function(file){
            console.log('file', file.size);
            if(file.size >= 1000000){
                message.error(`${e.file.name} size is bigger than 10mb.`);
            }
          
            return file;
        });
        setState(fileList);

        if (Array.isArray(e)) {
          return e;
        }
        return e && e.fileList;
      };
    
      const { Option } = Select;

    return ( 
        <BoxTemplate>
            <h2>Preliminary Information</h2> 
            <Form {...layout} form={form} name="control-hooks" onFinish={onFinish} validateMessages={validateMessages}>
                <Form.Item name="course1" label="Course (Option 1)"  rules={[{ required: true,  message: 'Field is required!' }]}>
                  <Select
                      placeholder="Please Select Course"
                      allowClear>
                      <Option value="lesotho">Lesotho</Option>
                      <Option value="malaysia">Malaysia</Option>
                      <Option value="london">United Kingdom</Option>
                      <Option value="botswana">Botswana</Option>
                      <Option value="china">China</Option>
                      <Option value="eswatini">eSwatini</Option>
                  </Select>
                </Form.Item>
                <Form.Item name="course2" label="Course (Option 2)"  rules={[{ required: true,  message: 'Field is required!' }]}>
                  <Select
                      placeholder="Please Select Course"
                      allowClear>
                      <Option value="lesotho">Lesotho</Option>
                      <Option value="malaysia">Malaysia</Option>
                      <Option value="london">United Kingdom</Option>
                      <Option value="botswana">Botswana</Option>
                      <Option value="china">China</Option>
                      <Option value="eswatini">eSwatini</Option>
                  </Select>
                </Form.Item>
                <Form.Item name="course-type" label="Course Type" rules={[{required: true }]}>
                    <Radio.Group>
                        <Radio value="pre-university-matriculation">Pre-University Matriculation</Radio>
                        <Radio value="associate-degree">Associate Degree</Radio>
                        <Radio value="honours-degree">Honours Degree</Radio>
                    </Radio.Group>
                </Form.Item>
                <Form.Item name="about-us" label="How do you know about us" rules={[{required: true }]}>
                    <Radio.Group>
                        <Radio value="advertisement">Advertisement</Radio>
                        <Radio value="education-fair">Education Fair</Radio>
                        <Radio value="introduced">Introduced by Friends</Radio>
                        <Radio value="walk-in">Walk-in</Radio>
                        <Radio value="telemarketing">Telemarketing</Radio>
                        <Radio value="others">Others</Radio>
                    </Radio.Group>
                </Form.Item>
                <div className="sub-text-label-pri">Must be in either .JPG, .PNG format and not larger than 10mb</div>
                <Form.Item className="upload-personal" getValueFromEvent={normFile} name="passportPhoto" label="Upload ID/Passport Photo" rules={[{ required: true }]}>
                     <Upload {...uploadProps} fileList={state}>
                        <ButtonOpacity >
                            <UploadOutlined /> Upload File
                        </ButtonOpacity>
                    </Upload>
                </Form.Item>
                <Form.Item className="form-tail-two">
                        <ButtonPrimary htmlType="submit" color="#5D89FF" title="Proceed"/>
                        <ButtonRegular onclick={onBackHandler} htmlType="submit" title="Back"/>
                </Form.Item>
            </Form>
        </BoxTemplate>
     );
}
 
export default PrelimnaryInfoForm;