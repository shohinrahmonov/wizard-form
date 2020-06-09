import React, {useState, useEffect} from 'react';
import BoxTemplate from '../components/BoxTemplate';
import { Form, Input,  Upload, message, DatePicker,  Button } from 'antd';
import ButtonPrimary from '../components/Button'
import ButtonOpacity from '../components/ButtonOpacity'
import { UploadOutlined, PlusOutlined } from '@ant-design/icons';
import ButtonRegular from '../components/ButtonRegular'
import moment from 'moment'



const AcademicInfoForm = ({handleFormDataComplete, handleBack, data}) => {
    const [form] = Form.useForm();
    const [state, setState] = useState([])
    const [statePayment, setStatePayment] = useState([])

    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16}
      };
      const onBackHandler =() => {
        handleBack(1);
      };
    
      useEffect(() => {
        const  dataIWantToFillFormWith = { };
        const  dataIWantToFillFormWithEng = { enqualification: [{ }], qualification: [{ }]};

        Object.keys(form.getFieldsValue()).forEach(key => {
            const obj = {};
            obj[key] = dataIWantToFillFormWith[key] || null;
            form.setFieldsValue(obj)
        });

        Object.keys(form.getFieldsValue()).forEach(key => {
            const obj = {};
            obj[key] = dataIWantToFillFormWithEng[key] || null;
            form.setFieldsValue(obj)
        });
        
        data && data.map(item=>{form.setFieldsValue(item)});

      }, [form]);
      const onFinish = values => {
        handleFormDataComplete(3, values);
      };
    

      const validateMessages = {
        required: 'Field is required!',
        types: {
          email: '${label} is not validate email!'
        },
        pattern: {
            mismatch: 'No special character or space allowed!'
        }
      };
      const uploadProps = {
        name: 'file',
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        headers: {
          authorization: 'authorization-text',
        },
        multiple: true,
        accept: ".pdf",
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
        setStatePayment(fileList);

        if (Array.isArray(e)) {
          return e;
        }
        return e && e.fileList;
      };
      const normFilePayment = e => {
        let fileList = e.fileList;
        fileList = fileList.slice(-1);
        
        fileList = fileList.map(function(file){
            console.log('file', file.size);
            if(file.size >= 1000000){
                message.error(`${e.file.name} size is bigger than 10mb.`);
            }
            return file;
        });
        setStatePayment(fileList);

        if (Array.isArray(e)) {
          return e;
        }
        return e && e.fileList;
      };

      const formItemLayout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 24}
      };
      function onChange(date, dateString) {
          console.log(moment().format('YYYY-MM-DD'))
        //   2019-12-31
        console.log(date, dateString);
      }
      const formItemLayoutWithOutLabel = {
        wrapperCol: {
          xs: { span: 16, offset: 0 },
          sm: { span: 16, offset: 8 },
        },
      };
    return ( 
        <BoxTemplate>
            <h2>Academic/Professional Information</h2>
            <p>Please list all School/College/Professional qualifications that you have taken from Age 15 and their results.</p>
            <Form {...layout} form={form} name="control-hooks" onFinish={onFinish} validateMessages={validateMessages}>
                <Form.List name="qualification" >
                    {(fields, { add, remove }) => {
                        return (
                            <div>
                                {fields.map((field, index) => (
                                    <Form.Item
                                        {...formItemLayout}
                                        key={field.key}
                                    >
                                        <Form.Item {...formItemLayout} label={`Academic Qualification ${index + 1}`} style={{ marginBottom: 0 }}>
                                            <Form.Item
                                                name={[field.name, "examination"]}
                                                rules={[{ required: true, max: 50,  pattern:/^[a-zA-Z]+$/ }]}
                                                style={{ display: 'inline-block', width: 'calc(70% - 8px)' }}
                                            >
                                                <Input placeholder="Name of Examination" />
                                            </Form.Item>
                                            <Form.Item
                                                name={[field.name, "year"]}

                                                rules={[{ required: true }]}
                                                style={{ display: 'inline-block', width: 'calc(30% - 8px)', margin: '0 8px' }}
                                            >
                                                <DatePicker placeholder="Year" onChange={onChange} picker="year"  disabledDate={d => !d || d.isAfter(moment().format('YYYY-MM-DD')) || d.isSameOrBefore("12/31/1970") } defaultPickerValue={moment("31/12/2002", 'DD/MM/YYYY')}  />
                                            </Form.Item>
                                        </Form.Item>
                                        <Form.Item  {...formItemLayoutWithOutLabel} style={{ marginBottom: 0 }} className="academic-school">
                                            <Form.Item
                                                name={[field.name, "school"]}
                                                rules={[{ required: true, max: 50,  pattern:/^[a-zA-Z]+$/ }]}
                                                style={{ display: 'inline-block', width: 'calc(70% - 8px)' }}
                                            >
                                                <Input placeholder="Name of Examination" />
                                            </Form.Item>
                                            <Form.Item
                                                name={[field.name, "result"]}
                                                rules={[{ required: true, max: 10, pattern:/^[a-zA-Z]+$/ }]}
                                                style={{ display: 'inline-block', width: 'calc(30% - 8px)', margin: '0 8px' }}
                                            >
                                                <Input placeholder="Result" />
                                            </Form.Item>
                                        </Form.Item>
                                        <div className="sub-text-label-pdf">Must be in .PDF format</div>
                                        <Form.Item name={[field.name, "upload"]} {...formItemLayout} className="upload-personal" valuePropName="fileList" getValueFromEvent={normFile} label="Academic Transcript" rules={[{ required: true }]}>
                                            <Upload {...uploadProps} fileList={state}>
                                                <ButtonOpacity >
                                                    <UploadOutlined /> Upload File
                                                </ButtonOpacity>
                                            </Upload>
                                        </Form.Item>
                                        <Form.Item className="btn-add" {...formItemLayoutWithOutLabel} >
                                            {fields.length >= 2 ? (
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
                                            ) : null}
                                        </Form.Item>
                                    
                                    </Form.Item>
                                ))}
                                <Form.Item className="btn-add-btn" {...formItemLayoutWithOutLabel}>
                                    <Button
                                        type="default"
                                        className="add-field"
                                        onClick={() => {
                                            console.log(fields)
                                            fields.length >=4 ? message.error(`You can only add upto 4 degrees.`) : add();
                                        }}>
                                        <PlusOutlined />Add Other Academic Qualifications
                                    </Button>
                                </Form.Item>
                            </div>
                        );
                    }}
                </Form.List>

                <p className="inline-paragraph">Please give details of any English Language qualifications you have obtained e.g. IELTS or TOEFL</p>

                <Form.List name="enqualification" >
                    {(fields, { add, remove }) => {
                        return (
                            <div>
                                {fields.map((field, index) => (
                                    <Form.Item
                                        {...formItemLayout}
                                        key={field.key}
                                    >
                                        <Form.Item {...formItemLayout} label={`English Language  Qualification ${index + 1}`} style={{ marginBottom: 0 }}>
                                            <Form.Item
                                                name={[field.name, "examination"]}
                                                rules={[{ required: true, max: 50,  pattern:/^[a-zA-Z]+$/ }]}
                                                style={{ display: 'inline-block', width: 'calc(70% - 8px)' }}
                                            >
                                                <Input placeholder="Name of Examination" />
                                            </Form.Item>


                                            <Form.Item
                                                name={[field.name, "year"]}

                                                rules={[{ required: true }]}
                                                style={{ display: 'inline-block', width: 'calc(30% - 8px)', margin: '0 8px' }}
                                            >
                                                <DatePicker placeholder="Year" onChange={onChange} picker="year"  disabledDate={d => !d || d.isAfter(moment().format('YYYY-MM-DD')) || d.isSameOrBefore("12/31/1970") } defaultPickerValue={moment("31/12/2002", 'DD/MM/YYYY')}  />
                                            </Form.Item>
                                        </Form.Item>
                                        <Form.Item  {...formItemLayoutWithOutLabel} style={{ marginBottom: 0 }} className="academic-school">
                                            <Form.Item
                                                name={[field.name, "result"]}
                                                rules={[{ required: true, max: 10,  pattern:/^[a-zA-Z]+$/ }]}
                                            >
                                                <Input placeholder="Result" />
                                            </Form.Item>
                                        </Form.Item>
                                        <div className="sub-text-label-pdf">Must be in .PDF format</div>
                                        <Form.Item name={[field.name, "upload"]} {...formItemLayout} className="upload-personal" valuePropName="fileList" getValueFromEvent={normFile} label="Academic Transcript" rules={[{ required: true }]}>
                                            <Upload {...uploadProps} fileList={state}>
                                                <ButtonOpacity >
                                                    <UploadOutlined /> Upload File
                                                </ButtonOpacity>
                                            </Upload>
                                        </Form.Item>
                                        <Form.Item className="btn-add" {...formItemLayoutWithOutLabel} >
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
                                            ) : null}
                                        </Form.Item>
                                    </Form.Item>
                                ))}
                                <Form.Item className="btn-add-btn" {...formItemLayoutWithOutLabel}>
                                    <Button
                                        type="default"
                                        className="add-field"
                                        onClick={() => {
                                            console.log(fields)
                                            fields.length >=2 ? message.error(`You can only add upto 2 English Language Qualifications.`) : add();
                                        }}>
                                        <PlusOutlined />Add Other English Language Qualifications
                                    </Button>
                                </Form.Item>
                            </div>
                        );
                    }}
                </Form.List>
                <h6 className="application-fee">Application Fee</h6>
                <Form.Item className="upload-personal" getValueFromEvent={normFile} valuePropName="fileList" name="paymentReceipt" label="Payment Receipt" rules={[{ required: true }]}>
                     <Upload {...uploadProps} fileList={statePayment}>
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
 
export default AcademicInfoForm;