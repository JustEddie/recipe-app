import React from 'react'
import {FormGroup, Label, SubscriptionInput, Message} from '../components/Template'

function SubscriptionForm() {
  return (
    <div>
    <FormGroup>
      <Label htmlFor="label">Full Name</Label>
      <SubscriptionInput id="label" />
      <Message>This is the validation message</Message>
    </FormGroup>
    <FormGroup>
      <Label>Email</Label>
      <SubscriptionInput />
      <Message>This is the validation message</Message>
      
    </FormGroup>
  </div>
  )
}

export default SubscriptionForm