import React from 'react';
import Background from '../components/Background';
import Button from '../components/Button'
import { Link } from 'react-router-dom';
import CollapseCards from '../components/CollapseCards';
import Menu from '../components/Menu'
import { DashboardWrapper } from '../style/DashboardWrapper'


const Dashboard = () => {
    return ( 
        <>
            <Background />
            <DashboardWrapper>
                <div className="row">
                    <div className="left-container">
                        <div className="left-top-contaner">
                            <h1>Online<br/>Registration</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                            <div className="btn-group-container">
                                <Link to="/form">
                                    <Button title="Fresh Application" color="#5D89FF"/>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="right-container">
                        <CollapseCards />
                    </div>
                </div>
                <Menu />
            </DashboardWrapper>
        </>
     );
}
 
export default Dashboard;