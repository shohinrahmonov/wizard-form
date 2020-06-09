import React, { useState } from 'react';
import { useWidth } from '../hooks/useWidth';
import { Steps, Popover, Drawer, Button as AntButton } from 'antd';
import {MenuOutlined} from '@ant-design/icons';
import { MenuElementForm, MenuMobile } from '../style/MenuElementForm';


const { Step } = Steps;

const Menu = ({current, change, steps}) => {
   
    const handleMenuActiveClass = ()=>steps.map(step=><Step onClick={onClose} key={step.id} title={step.title} style={!step.complete?{pointerEvents: "none"}: {} }   description={step.description} />);
            
    const handleMenuActiveClassDesktop = ()=>steps.map(step=><Step key={step.id} title={step.title} style={!step.complete?{pointerEvents: "none"}: {} }   description={step.description} />);
    
    const onProceed =(e)=>{
        change(e);
    }
    const customDot = (dot, { status, index }) => (
        <Popover
          content={
            <span>
              step {index} status: {status}
            </span>
          }
        >
          {dot}
        </Popover>
      );
      const [visible, setVisable] = useState(false);
      const onClose = ()=>{
        setVisable(!visible);
      }

    return ( <>
            {useWidth() > 950 ? <MenuElementForm>
                        <Steps current={current} onChange={onProceed}  progressDot={customDot} direction="vertical">
                                {handleMenuActiveClassDesktop()}
                        </Steps>
                    </MenuElementForm> :
                    <MenuMobile>
                        <div className="title-drawer-header">
                            <AntButton type="primary" onClick={onClose}>
                                <MenuOutlined />
                            </AntButton>
                            <div className="text-container">
                                <span>{steps[current].description}</span>
                                <h1>{steps[current].title}</h1>
                            </div>
                        </div>
                        <Drawer
                                placement="bottom"
                                className="mobile-menu-drawer"
                                closable={false}
                                onClose={onClose}
                                visible={visible}
                                key="bottom">
                            <Steps className="mobile-menu-item" current={current} onChange={onProceed}  progressDot={customDot} direction="vertical">
                                    {handleMenuActiveClass()}
                            </Steps>
                        </Drawer>
                    </MenuMobile>}
        </>
     );
}
 
export default Menu;