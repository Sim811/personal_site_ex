import React from "react";
import { Segment, Header, Image } from "semantic-ui-react";

const Bio = () => (
  <Segment basic >
    <Header as="h1" textAlign='center'>Bio</Header>
    <Segment basic  textAlign="center" style={{fontSize: 18,}} >
      It was going to rain. The weather forecast didn't say that, 
      but the steel plate in his hip did. He had learned over the years to 
      trust his hip over the weatherman. It was going to rain, 
      so he better get outside and prepare.
    </Segment>
  </Segment>
);


export default Bio;