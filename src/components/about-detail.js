import React from 'react'
import styled from 'styled-components';
import { colors } from '../styles/colors';
import { BiHeartCircle } from 'react-icons/bi';
import { FaRegUserCircle } from 'react-icons/fa';
import { AiOutlineDollarCircle } from 'react-icons/ai';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

const data=[
  {
  id:1,
  title:"Skills",
  content:"Learn about my skills in programming",
  link:`Learn more`,
  icon:<BiHeartCircle size={60} color="rgb(109, 219, 154)"/>
  },
  
  {
  id:2,
  title:"Experience",
  content:"Get to know the timeline of my education",
  link:"Learn more",
  icon:<FaRegUserCircle size={60}  color="rgb(109, 219, 154)"/>
  },

  {
  id:3,
  title:"Portfolio",
  content:"Check my previous works",
  link:"Learn more ",
  icon:<AiOutlineDollarCircle size={60} color="rgb(109, 219, 154)"/>
  },
]

export default function AboutDetail() {
  return (
    <Container>
    {data.map(element => 
        <ContElement>
          {element.icon}
          <Title>{element.title}</Title>
          <div>{element.content}</div>
          <Link href="#">{element.link}<MdOutlineKeyboardArrowRight size={20}/></Link>
        </ContElement>
    )}
    </Container>
  )
}

const Container=styled.div`
  display:flex;
  flex-direction:row;
  gap:60px;
  background-color:${colors.black};
  height:250px;
  color:${colors.white};
  font-family: Lato;
  align-items:center;
  text-align:center;
  justify-content:center;
  padding:20px;
`

const ContElement=styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  gap:20px;
`

const Title=styled.div`
  font-size: 20px;
  font-family: "Roboto Slab";
`

const Link=styled.a`
  display:flex;
  align-items:center;
  color:rgb(109, 219, 154);
  cursor:padding;
  text-decoration:none;
`