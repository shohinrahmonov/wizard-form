import React from 'react';
import { CardWrapper } from '../style/CardWrapper';


const Button = ({title, text, list, svg}) => {
    return ( 
        <CardWrapper>
            <h2>{title}</h2>
            <span></span>
            <p>{text}</p>
            <ol>
                {list.map(item=> <li key={item}>{item}</li>)}
            </ol>
            {svg}
        </CardWrapper>
     );
}
 
export default Button;