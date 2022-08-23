import styled from "styled-components";

export const PlayerButton = styled.button`

color: #ffffff;
padding: 0.7em 1em;
width:150px;
margin: 0.5em;
font-size: 18px;
/* border-radius: 0.2em; */
background: #4e4b4b;

border-color: orange;
/* box-shadow: 1px px 3px #5c5c5c,
            -1px -1px 3px #636363; */
&:active {
color: darkorange;
box-shadow: inset 1px 1px 7px #5c5c5c,
            inset -1px -1px 7px #636363;
}
@media (max-height:500px){
    
    font-size: 20px;
    height:60px;
    flex-grow:1;
}
@media (max-width:1130px){
    
    
    /* font-size:12px; */
    
}
@media (min-height:501px){
    @media (max-width:980px){
        
        
        font-size:25px;
        height:100px;
        width:90%;
    }
}
`

