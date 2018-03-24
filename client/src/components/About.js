import React, { Component } from 'react';
import { Segment, Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';

class About extends Component {
  render() {
    return (
      <Grid centered columns={2}>
        <Grid.Column>
          <Segment raised>
            <div style={{textAlign: 'center'}}>  About </div>
                                                
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}



export default connect()(About);
