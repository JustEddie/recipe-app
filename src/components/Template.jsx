import React from 'react'
import styled from 'styled-components';
import "../App.css";


const Wrapper = styled.section`
  padding: 1.5rem 4em;
  background: papayawhip;
  margin : 2rem 0rem;
  min-height: 40vh;

h1{
    margin: 0.5rem 0 1rem 0;
}
`;

const Card = styled.div`
  height: 15 rem;
  width:5 rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  img {
    object-fit : fill;
    border-radius: 5rem;
    width : 80%;
    height: 100%;
  }

  p{
    font-size:1.5rem;
  }

`

const Form = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background-color: palevioletred;
  /* Change width of the form depending if the bar is opened or not */
  width: ${props => (props.barOpened ? "30rem" : "3rem")};
  /* If bar opened, normal cursor on the whole form. If closed, show pointer on the whole form so user knows he can click to open it */
  cursor: ${props => (props.barOpened ? "auto" : "pointer")};
  padding: 2rem;
  height: 3rem;
  border-radius: 10rem;
  transition: width 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
`;

const Input = styled.input`
  font-size: 1.5rem;
  line-height: 1;
  background-color: transparent;
  width: 100%;
  margin-left: ${props => (props.barOpened ? "1rem" : "0rem")};
  border: none;
  color: white;
  transition: margin 300ms cubic-bezier(0.645, 0.045, 0.355, 1);

  &:focus,
  &:active {
    outline: none;
  }
  &::placeholder {
    color: white;
  }
`;

const Button = styled.button`
font-size: 1.5rem;
  line-height: 1;
  pointer-events: ${props => (props.barOpened ? "auto" : "none")};
  cursor: ${props => (props.barOpened ? "pointer" : "none")};
  background-color: transparent;
  border: none;
  outline: none;
  color: white;
`;

const List = styled.div`
    display:flex;
    justify-content:center;
    margin:1rem;
`;

export {Wrapper, Card, Form, Input, Button, List};