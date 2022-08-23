import styled from "styled-components";

export const FlexBuffer=styled.div`
flex-grow:1;
flex-shrink:3;

@media (max-width:1400px){
    
    display:none;
   
}
@media (max-height:500px){
       display:none;
    }
`