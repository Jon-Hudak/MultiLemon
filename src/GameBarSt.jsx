import styled from 'styled-components';

export const GameBarSt = styled.li`
@media (max-width: 940px) {
  font-size:15px;  
}
  border: 0.2rem solid;
  border-color: ${props=>props.borderColor || 'black'};
  display:flex;
  padding:0px 20px;
  font-size: 25px;
  background-color:#e43681;
  margin:5px;
  color: black;
  font-weight: bold;
  height: 70px;  
  flex-grow: 1;
  overflow: hidden;
  flex-basis: 40%;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  
  

  /* @media (max-width:780px){
    flex-basis:100%;
  } */
  
  
  
`;