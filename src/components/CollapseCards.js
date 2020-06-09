import React from 'react';
import { useWidth } from '../hooks/useWidth';
import DesktopCards from './DesktopCards';
import MobileCards from './MobileCards';

const CollapseCards = () => {
   
    return ( <>
           {useWidth() > 950 ? <DesktopCards /> : <MobileCards />}
        </>
     );
}
 
export default CollapseCards;