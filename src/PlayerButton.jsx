 import styled from "styled-components";

export const PlayerButton = styled.button`

color: #ffffff;
padding: 0.7rem 1rem;
height:6rem;
width:16rem;
margin: 0.5rem;
font-size: 2.0rem;
/* border-radius: 0.2rem; */
background: #4e4b4b;
flex-shrink:1;
border-color: orange;
/* box-shadow: 1px px 3px #5c5c5c,
            -1px -1px 3px #636363; */
&:active {
color: darkorange;
box-shadow: inset 1px 1px 7px #5c5c5c,
            inset -1px -1px 7px #636363;
}
@media (max-height:500px){
    
    font-size: 1.5rem;
    height:6.0rem;
    flex-grow:1;

    max-width:11rem;
}
/* @media (max-width:1130px){
    
    
    font-size:12px;
    
} */
@media (min-height: 500px){
    @media (max-width:910px){
        
        
        //font-size:1.5rem;
        height:5.8rem;
        width:20rem;
    }
    
}

`

