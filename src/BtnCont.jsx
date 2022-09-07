import styled from "styled-components";

export const BtnCont = styled.div`
    background-color: black;
    position:sticky;
    top:10px;
    height:100vh;
    //flex-grow:1;
    min-width:250px;
    max-width: 400px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column; 
    //flex-shrink:1;
    

    @media (max-height:700px){
        top:0px;
        flex-direction:row;
        height:160px;
        max-width:100%;
        width:100%;
        
        justify-content: space-evenly;
    }
    /* @media (max-width:1130px){
    
        width:100px;
        flex-grow:2;
    }
     */
`