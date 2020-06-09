import React, {useState, useReducer } from 'react';
import Background from '../components/Background';
import Button from '../components/BackButton'
import FormMenu from '../components/FormMenu'
import PersonalInfoForm from '../forms/PersonalInfoForm'
import PreliminaryInfoForm from '../forms/PreliminaryInfoForm'
import AcademicInfoForm from '../forms/AcademicInfoForm'
import Result from '../forms/Result'
import Modal from '../components/Modal'
import { FormWrapper } from '../style/FormWrapper'
import { stepReducer } from '../reducers/stepReducer'

const Form = () => {
    const [state, dispatch] = useReducer(stepReducer, {steps:[ {
                                                                    id: 1,
                                                                    title: 'Personal Information',
                                                                    complete: false,
                                                                    description: "Step 01"
                                                                },
                                                                {
                                                                    id: 2,
                                                                    title: 'Preliminary Information',
                                                                    complete: false,
                                                                    description: "Step 02"
                                                                },
                                                                {
                                                                    id: 3,
                                                                    title: 'Academic/Professional Information',
                                                                    complete: false,
                                                                    description: "Step 03"
                                                                }],
                                                                current: 0
    });
    
    const handleComplete=(id)=>{
        dispatch({type: "complete", payload: id})
        dispatch({type: "addCurrent"})
    }
    const handleFormDataComplete=(id, data)=>{
        dispatch({type: "fill", payload: {id, data}})
        dispatch({type: "addCurrent"})
    }

    const handleBack=()=>{
        dispatch({type: "back"})
    }

    const handleAvaiable=(id)=>{
        dispatch({type: "avaiable", payload: id})
    }

    const [toggle, setToggle] = useState(false);
    console.log(state);
    return ( 
        <>
            <Modal open={toggle} />
            <Background />
            <FormWrapper>
                <div className="row">
                    <div className="left-container">
                        <div className="left-top-contaner">
                            <h1>Online<br/> Registration</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                            <div className="btn-group-container">
                                <Button title="Back to Dashboard" onclick={()=>setToggle(!toggle)} />
                            </div>
                        </div>
                    </div>
                    <div className="right-container">
                        {state.current === 0 ? (<PersonalInfoForm data={state.steps[state.current].formData} handleFormDataComplete={handleFormDataComplete} />) : null}    
                        {state.current === 1 ? (<PreliminaryInfoForm data={state.steps[state.current].formData} handleFormDataComplete={handleFormDataComplete}  handleBack={handleBack}  />)  : null}    
                        {state.current === 2 ? (<AcademicInfoForm  data={state.steps[state.current].formData} handleFormDataComplete={handleFormDataComplete} handleBack={handleBack} />)  : null}    
                        {state.current === 3 ? (<Result  data={state.steps} />)  : null}    
                    </div>
                </div>
                <FormMenu current={state.current} steps={state.steps} change={handleAvaiable} />
            </FormWrapper>
        </>
     );
}
 
export default Form;