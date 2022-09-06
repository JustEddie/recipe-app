import { Button } from "bootstrap";
import React from "react";
import {
  FormGroup,
  Label,
  SubscriptionInput,
  Message,
  SubscriptionButton,
} from "../components/Template";

function SubscriptionForm() {
  return (
    <div>
      <FormGroup>
      <Message>Subscribe to get our popular recipes by email!</Message>
        <Label >Full Name</Label>
        <SubscriptionInput />
        <Label>Email</Label>
        <SubscriptionInput />
        <SubscriptionButton>Subscribe</SubscriptionButton>
      </FormGroup>
    </div>
  );
}

export default SubscriptionForm;
