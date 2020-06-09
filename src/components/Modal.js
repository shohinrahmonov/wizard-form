import React, {useState} from 'react';
import { Form, Input } from 'antd';
import { useHistory } from 'react-router-dom';
import ButtonPrimary from '../components/ButtonPrimary'
import CopyToClipboard from 'react-copy-to-clipboard';
import { ModalElement } from '../style/ModalElement'


const layout = {
  wrapperCol: { span: 8 }
};



const Modal = ({open}) => {
    let history = useHistory();
    const [form] = Form.useForm();

    const onFinish = values => {
        console.log(values);
        history.push('/');
      };
      const validateMessages = {
        required: 'Field is required!',
        types: {
          email: 'Please enter a valid email address!'
        }
      };
      const [copy, setCopy]= useState(false);
      const [value, setValue]= useState('201223945');
      
      const onCopy =()=>{
          setCopy(true);
      }
    if(!open) return null;
    return ( 
        <ModalElement>
            <div className="box-content-modal">
               <div className="text-top-container">
                   <h1>Save Application</h1>
                   <p>Please copy the Application ID below. The Application ID will help you to retrieve your application data again till you've finished filling up the registration application.</p>
                   <span>Please finish the application registration within one (1) week or your Application ID will not be usable after.</span>
               </div>
               <div className="application-info">
                   <span>Application ID</span>
                   <h2>201223945</h2>
                   <CopyToClipboard onCopy={onCopy} text={value}>
                        <p>Copy to Clipboard</p>
                   </CopyToClipboard>
                   {copy ? <span style={{color: 'red'}}>Copied.</span> : null}
               </div>
               <Form {...layout} form={form} name="control-hooks" onFinish={onFinish} validateMessages={validateMessages}>
                    <Form.Item name="email" rules={[{ required: true, type: "email" }]}>
                        <Input placeholder="Please State your Email" />
                    </Form.Item>
                    <Form.Item className="form-tail-modal">
                            <ButtonPrimary htmlType="submit"  title="Exit Registration"/>
                    </Form.Item>
                </Form>
            </div>
        </ModalElement>
     );
}
 
export default Modal;