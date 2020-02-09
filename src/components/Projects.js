import React from "react";
import { Segment, Header, Grid, Image, List } from "semantic-ui-react";

const Projects = () => (
  <Segment basic>
    <Header as="h2" textAlign="center" >Projects</Header>
    <Grid>
      <Grid.Row columns={3} divided>
        <Grid.Column>
          <Image rounded src="https://acadianakarate.com/wp-content/uploads/2017/04/default-image.jpg" />
        </Grid.Column>
        <Grid.Column>
          <Image rounded src="https://acadianakarate.com/wp-content/uploads/2017/04/default-image.jpg" />
        </Grid.Column>
        <Grid.Column>
          <Image rounded src="https://acadianakarate.com/wp-content/uploads/2017/04/default-image.jpg" />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>
);

export default Projects;