import React from "react";
import styled from "styled-components";
import "../App.css";

const Wrapper = styled.section`
  padding: 1.5rem 4em;
  background: papayawhip;
  margin: 2rem 0rem;
  min-height: 35vh;
  display:inline-grid;

  h1 {
    margin: 0.5rem 0 1rem 0;
  }
`;

const Card = styled.div`
  height: 100%;
  width: 100%;
  display: inline-grid;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  img {
    object-fit: fill;
    border-radius: 5rem;
    width: 95%;
    height: 100%;
  }

  p {
    font-size: 1.5rem;
    z-index:10;
    font-weight: 600;
    text-align:center;
  }
`;

const Form = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background-color: palevioletred;
  /* Change width of the form depending if the bar is opened or not */
  width: ${(props) => (props.barOpened ? "30rem" : "3rem")};
  /* If bar opened, normal cursor on the whole form. If closed, show pointer on the whole form so user knows he can click to open it */
  cursor: ${(props) => (props.barOpened ? "auto" : "pointer")};
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
  margin-left: ${(props) => (props.barOpened ? "1rem" : "0rem")};
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
  pointer-events: ${(props) => (props.barOpened ? "auto" : "none")};
  cursor: ${(props) => (props.barOpened ? "pointer" : "none")};
  background-color: transparent;
  border: none;
  outline: none;
  color: white;
`;

const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem;
`;

const OptionButton = styled.button`
  display: inline-block;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  display: block;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 27vw 27vw 27vw;
  gap: 3rem;
  align-items: center;


  @media (max-width: 768px) {
    grid-template-columns: 40vw 40vw;
  };

  .Card{
  display: flex;
  align-self: center;
  flex-direction: column;
  font-size: 1.5rem;
  padding: 2rem;

  img {
    border-radius: 5rem;
  }}

`;
const Details = styled.div`
  align-items: center;
  padding: 3%;

  h1 {
    font-size: 2rem;
  }

  img {
    border-radius: 2rem;
  }

  p {
    padding: 3rem;
    font-size: 1.5rem;
  }
`
const DetailRecipe = styled.div`
  grid-template-columns: 30vw 50vw;
  gap: 3rem;
`

// subscribe
const Subscription = styled.button`
  display: inline-block;
  position:absolute;
  top: 2rem;
  right:3rem;
  border-radius: 10rem;
  background: transparent;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`

// Subscription
const FormGroup = styled.div`
	color: palevioletred;
    display: block;
	width: 300px;
	margin: 50px auto;
`;

const Label = styled.label`
	margin-bottom: 0.5em;
	color: palevioletred;
    display: block;
`;


const SubscriptionInput = styled.input`
	padding: 0.5em;
	color: palevioletred;
	background: papayawhip;
	border: none;
	border-radius: 3px;
	width: 100%;
	margin-bottom: 0.5em;
`;

const Message = styled.label`
	color: palevioletred;
    display: block;
    margin-bottom: 5rem;
    font-size: 1.2rem;
`;

export const SubscriptionButton = styled.button`
  	padding: 0.5em;
	color: palevioletred;
	background: papayawhip;
	border: none;
	border-radius: 3rem;
	width: 50%;
	margin-bottom: 0.5em;
  margin-top: 2rem;
`


export {
  Wrapper,
  Card,
  Form,
  Input,
  Button,
  List,
  OptionButton,
  Grid,
  Details,
  DetailRecipe,
  Subscription,
  FormGroup,
  Label,
  SubscriptionInput,
  Message
};
