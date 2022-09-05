import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Subscription } from './Template'

function Subscribe() {
    const navigate = useNavigate();

    function getSubscriptionForm(e){
        e.preventDefault();
        navigate("/subscription/");
    }
  return (
    <div>
        <Subscription onClick={getSubscriptionForm}>Subscribe</Subscription>
    </div>
  )
}

export default Subscribe