import React from "react";
import "../styles/ContactMe.css";
import { Form, Segment, Header, Container, Button, Icon } from "semantic-ui-react";


const ContactMe = () => (
  <Segment basic >
    <Header as="h1" textAlign="center" >Contact Me</Header>
    <Container>
      <Form>
        <Form.Input
          placeholder="Name"
          type="text"
          name="name"
        />
        <Form.Input
          placeholder="Email"
          type="text"
          name="email"
        />
        <Form.Input
          placeholder="Subject"
          type="text"
          name="subject"
        />
        <Form.Input
          placeholder="Message"
          type="text"
          name="message"
        />
        <Form.Button type="submit" fluid inverted disabled>Submit</Form.Button>
      </Form>

    </Container>
    <br />
    <br />
    <Container textAlign="center">
      <Button 
        circular 
        color="facebook" 
        icon="facebook" 
        href={'https://www.facebook.com/'} 
      />
      <Button 
        circular 
        color="twitter" 
        icon="twitter" 
        href={'https://twitter.com/'}
      />
      <Button 
        circular 
        color="linkedin" 
        icon="linkedin" 
        href={'https://www.linkedin.com/'} 
      />
      <Button 
        circular 
        color="instagram" 
        icon="instagram" 
        href={'https://www.instagram.com/?hl=en'} 
      />
      <Button 
        circular 
        color="youtube" 
        icon="youtube" 
        href={'https://www.youtube.com/'} 
      />
    </Container>
  </Segment>
);


export default ContactMe;