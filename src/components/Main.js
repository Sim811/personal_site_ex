import React from 'react';
import { Segment, Header, Image, Icon } from 'semantic-ui-react';


const Main = () => (
  <Segment basic  style={{ height: "675px", }} >
    <div style={{ paddingTop: "100px" }}>
      <Image src="https://t4.ftcdn.net/jpg/00/64/67/63/240_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg" centered circular />
      <Header size="huge" textAlign='center' style={{ fontSize: 50 }} >Default Name</Header>
      <Header textAlign="center" >( Example Template )</Header>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Segment basic textAlign="center">
        <Icon name="chevron down" size="large" />
      </Segment>
    </div>
  </Segment>
);

export default Main;