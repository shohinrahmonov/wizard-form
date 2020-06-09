import React from 'react';
import Button from './Button';
import {Link} from 'react-router-dom';
import { useWidth } from '../hooks/useWidth';
import { useLocation } from 'react-router-dom'
import { MenuElement } from '../style/MenuElement'
import { MenuMobile } from '../style/MenuMobile'

const Menu = () => {
    const links =[{title: 'Dashboard', href: '/', icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                    <path id="Path_14858" data-name="Path 14858" d="M590,464h-3a2,2,0,0,1-2-2v-3a2,2,0,0,1,2-2h3a2,2,0,0,1,2,2v3a2,2,0,0,1-2,2Zm0-5h-3v3h3v-3Zm0-4h-3a2,2,0,0,1-2-2v-3a2,2,0,0,1,2-2h3a2,2,0,0,1,2,2v3a2,2,0,0,1-2,2Zm0-5h-3v3h3v-3Zm-9,14h-3a2,2,0,0,1-2-2v-3a2,2,0,0,1,2-2h3a2,2,0,0,1,2,2v3a2,2,0,0,1-2,2Zm0-5h-3v3h3v-3Zm0-4h-3a2,2,0,0,1-2-2v-3a2,2,0,0,1,2-2h3a2,2,0,0,1,2,2v3a2,2,0,0,1-2,2Zm0-5h-3v3h3v-3Z" transform="translate(-576 -448)"  fillRule="evenodd"/></svg>},
                    {title: 'Status', href: '/status', icon: <svg xmlns="http://www.w3.org/2000/svg" width="13.001" height="16" viewBox="0 0 13.001 16">
                        <path id="Path_14857" data-name="Path 14857" d="M588,656h-9a2,2,0,0,1-2-2.008V642.008A2.006,2.006,0,0,1,579,640h6.5a2.374,2.374,0,0,1,1.563.65l2.288,2.287A2.4,2.4,0,0,1,590,644.5V654a2,2,0,0,1-2,2h0Zm-9-2h9v-8h-2a2,2,0,0,1-2-2v-2c-1.92,0-5,0-5,.006V654Zm7-11.586V644h1.587L586,642.414Z" transform="translate(-577 -640)" fillRule="evenodd"/> </svg>},
                    {title: 'Checklist', href: '/checklist', icon: <svg xmlns="http://www.w3.org/2000/svg" width="20.053" height="16.512" viewBox="0 0 20.053 16.512"><path id="Path_14860" data-name="Path 14860" d="M13.5,11.393,15.811,13.7l7.7-7.7"  transform="translate(-4.877 -4.586)"  strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
                    <path id="Path_14861" data-name="Path 14861" d="M18.368,11.434v5.393a1.541,1.541,0,0,1-1.541,1.541H6.041A1.541,1.541,0,0,1,4.5,16.827V6.041A1.541,1.541,0,0,1,6.041,4.5h8.475" transform="translate(-3.5 -2.856)" fill="none" strokeLinecap="round" strokeLinejoin="round"  strokeWidth="2"/></svg>},
                    {title: 'F.A.Q', href: '/faq', icon: <svg id="Group_17285" data-name="Group 17285" xmlns="http://www.w3.org/2000/svg" width="9.765" height="16.255" viewBox="0 0 9.765 16.255">
                    <path id="Path_14862" data-name="Path 14862" d="M596.637,643.495a4.155,4.155,0,0,1,.6-2.067,4.782,4.782,0,0,1,1.738-1.734,5.075,5.075,0,0,1,2.665-.687,5.262,5.262,0,0,1,2.5.574,4.2,4.2,0,0,1,1.675,1.562,4.117,4.117,0,0,1,.591,2.149,3.6,3.6,0,0,1-.336,1.6,4.938,4.938,0,0,1-.8,1.186q-.465.5-1.666,1.681a7.09,7.09,0,0,0-.532.585,2.4,2.4,0,0,0-.3.462,2.293,2.293,0,0,0-.151.419c-.036.138-.09.384-.161.735q-.185,1.116-1.162,1.116a1.132,1.132,0,0,1-.854-.365,1.517,1.517,0,0,1-.348-1.085,4.356,4.356,0,0,1,.255-1.562,4.015,4.015,0,0,1,.674-1.159,16.158,16.158,0,0,1,1.133-1.187q.626-.6.9-.907a3.068,3.068,0,0,0,.469-.682,1.771,1.771,0,0,0,.191-.816,1.991,1.991,0,0,0-.581-1.45,2.018,2.018,0,0,0-1.5-.59,1.967,1.967,0,0,0-1.582.6,4.924,4.924,0,0,0-.859,1.755q-.331,1.215-1.259,1.213a1.185,1.185,0,0,1-.924-.424A1.361,1.361,0,0,1,596.637,643.495Zm4.765,11.767a1.456,1.456,0,0,1-1.039-.424,1.561,1.561,0,0,1-.445-1.186,1.6,1.6,0,0,1,.43-1.138,1.386,1.386,0,0,1,1.055-.462,1.344,1.344,0,0,1,1.035.462,1.627,1.627,0,0,1,.421,1.138,1.577,1.577,0,0,1-.44,1.181A1.415,1.415,0,0,1,601.4,655.262Z" transform="translate(-596.637 -639.007)"/></svg>},
                    {title: 'Enquiry', href: '/enquiry', icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15.996" viewBox="0 0 16 15.996">
                    <path id="Path_14859" data-name="Path 14859" d="M583.993,142a6.005,6.005,0,1,1,5.169-2.942,1.009,1.009,0,0,0-.1.787l.5,1.7-1.718-.49a1,1,0,0,0-.787.1,5.991,5.991,0,0,1-3.067.843Zm6.73,1.96a1,1,0,0,0,1.239-1.236c-.1-.35-.867-3.026-.866-3.035a8,8,0,1,0-3.41,3.411l3.04.862h0v0Z" transform="translate(-576 -128.004)" fillRule="evenodd"/></svg>}
                ];
    const desktopLinks =[{title: 'Status', href: '/status'},
        {title: 'Checklist', href: '/checklist'},
        {title: 'F.A.Q', href: '/faq'},
        {title: 'Enquiry', href: '/enquiry'}
    ];
    let location = useLocation();

    const handleMenuActiveClass = ()=>links.map(link=><Link key={link.title} to={link.href}><button className={location.pathname === link.href ? 'active': ''}><span>{link.title}</span>{link.icon}</button></Link>);
            
    const handleMenuActiveClassDesktop = ()=>desktopLinks.map(link=><Link key={link.title} to={link.href}> <Button classComponent={location.pathname === link.href ? 'active': ''} title={link.title} hover /></Link>);
    

    return ( <>
            {useWidth() > 950 ? <MenuElement>
                    {handleMenuActiveClassDesktop()}
                </MenuElement> :
                <MenuMobile>
                    {handleMenuActiveClass()}
                </MenuMobile>
            }
        </>
     );
}
 
export default Menu;