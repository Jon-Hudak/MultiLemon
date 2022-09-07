import styled from "styled-components";

export const GameList=styled.ul`
    background-color: #4e4b4b;
    padding: 20px;
    max-width:60%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    flex-grow:3;
    align-content:flex-start;

    @media (max-height:700px){
       flex-grow:0;
       max-width:100%;
    }


    
    
    
    

    
`