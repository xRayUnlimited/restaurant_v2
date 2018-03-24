import React, { Component } from 'react';
import { Segment, Grid, Divider, Image, Container, Header} from 'semantic-ui-react';
import { connect } from 'react-redux';

class About extends Component {
  render() {
    return (
      <Grid centered columns={2}>
      <Divider hidden />
        <Grid.Column>
          <Segment raised>
          <div>
            <Header style={{textAlign: 'center'}}>  About </Header>
            <Divider hidden />
            B&D Burgers is the childhood dream of two best friends, Aaron VanTrap and Mike Wazowski. While spending their youthful days skateboarding and collecting old beer cans, they often talked about opening their own burger joint. Flash forward to adulthood, and Aaron had spent 15 years in the business world operating a ski & snowboard shop in Park City, UT. Mike had spent 20 years in the restaurant world in Las Vegas, NV. After one crappy day at work in 1980, Aaron called Mike to propose a "what if" scenario and the rest, as the saying goes, is history. Mike was really into homemade burgers and Aaron had been really good at making businesses grow. With their powers combined, a B&D Burgers was born!
          </div>
          </Segment>
          <Container>
            <Segment raised >
            <Image src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
            </Segment>
          </Container>
        </Grid.Column>
      </Grid>
    );
  }
}



export default connect()(About);
