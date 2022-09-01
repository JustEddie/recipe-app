import React from 'react'
import styled from 'styled-components';


const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
  margin : 4rem 0rem;
`;

const Card = styled.div`
  height: 10 rem;
  width:5 rem;

  img {
    border-radius: 5rem;
    width : 80%;
    height: 80%;
  }
`
export {Wrapper, Card};