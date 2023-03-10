import React from 'react'
import styled from 'styled-components';
import job from '../assets/job.png';
import { colors } from '../styles/colors'
import { SlMagnifier as Lupa } from 'react-icons/sl';

//main function
export default function Portfolio() {
  return (
    <Container>
      <JobDiv><Button><a href="https://get-that-job-nieves.netlify.app/"><Lupa color="white"/></a></Button></JobDiv>
    </Container>
  )
}
//styled components
const Container=styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  text-align:center;
  align-items:center;
  height:800px;
  background-color:${colors.black};

  @media screen and (max-width: 360px){   
    height:420px;
  }
`
const JobDiv=styled.div`
  display:flex;
  flex-direction:column;
  background-image:url(${job});
  width:480px;
  height:85%;
  background-size:cover;
  justify-content:flex-end;
  padding:20px;

  @media screen and (max-width: 360px){   
    width:90%;
    height:400px;
  }
`
const Button=styled.button`
  border: none;
  border-radius: 50px;
  background:linear-gradient(-180deg, rgb(109, 219, 154) 0%, rgb(73, 175, 115) 96%) no-repeat;
  width: 37px;
  height:40px;
  color:${colors.white};
  box-shadow: 3px 3px 3px black;
  right:38%;
  cursor:pointer;
` 