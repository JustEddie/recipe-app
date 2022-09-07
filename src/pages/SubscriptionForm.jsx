import React, { useRef, useState } from "react";
import {
  FormGroup,
  Label,
  SubscriptionInput,
  Message,
  SubscriptionButton,
} from "../components/Template";

function SubscriptionForm() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const inputRef = useRef();
  const formRef = useRef();

  // const getSearch = async (id) => {
  //   const api = await fetch(
  //     `https://api.spoonacular.com/recipes/complexSearch?apiKey=52850cdf3fc941fd89b0ac10e71ba2ad&number=12&query=${id}`
  //   );
  //   const data = await api.json();
  //   setSearch(data.results);
  // };

  // useEffect(() => {
  //     getSearch(params.search);
  //   }, [params.search]);

  function handleSubmit(e) {
    e.preventDefault();
    //post
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: {name},email:{email} }),
    };
    fetch("https://reqres.in/api/posts", requestOptions)
      .then((response) => response.json())
      .then((data) => this.setState({ postId: data.id }));
  }

  return (
    <div>
      <FormGroup onSubmit={handleSubmit} ref={formRef}>
        <Message>Subscribe to get our popular recipes by email!</Message>
        <Label>Full Name</Label>
        <SubscriptionInput
          name="name"
          onChange={(e) => setName(e.target.value)}
          ref={inputRef}
        />
        <Label>Email</Label>
        <SubscriptionInput
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          ref={inputRef}
        />
        <SubscriptionButton>Subscribe</SubscriptionButton>
      </FormGroup>
    </div>
  );
}

export default SubscriptionForm;
