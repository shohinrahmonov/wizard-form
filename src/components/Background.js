import React from 'react';
import styled from 'styled-components';
import backImage from '../static/bg.jpg'

const Banner = styled.div`
    background-image: url(${backImage});
    background-size: cover;
    height: 81vh;
    width: 100%;
    position: absolute;
    top: 0;
    z-index: -1;
    clip-path: polygon(0 0, 100% 0, 100% 35%, 0 75%);
    @media(max-width: 1024px){
        height: 72vh;
    }
    @media(max-width: 512px){
        height: 87vh;
        clip-path: polygon(0 0,100% 0,100% 56%,0 75%);
    }
`;


const Background = () => {
    return ( 
        <Banner />
     );
}
 
export default Background;