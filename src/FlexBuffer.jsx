import styled from "styled-components";

export const FlexBuffer=styled.div`
flex-shrink: 2;

@media (max-width:1400px){
    
    display:none;
   
}
@media (max-height:500px){
       display:none;
    }
`