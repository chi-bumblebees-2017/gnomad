import React, { Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

class ProfileCard extends Component {
  render() {
    return(
      <div>
      <Card>
        <Image height="100" width="100" src={this.props.user.image_url} />
        <Card.Content>
          <Card.Header>
            {this.props.user.first_name}
          </Card.Header>

          <Card.Description>
            <h2>A Little Bit About Me...</h2>
            <p>{this.props.user.bio}</p>
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Card.Description>
            <h3>as a Gnomad, I am interested in...</h3>
            <ul>
              {this.props.travel_interests.map((interest) =>
                <li key={this.props.travel_interests.indexOf(interest)}>{interest.replace(/_/g," ")}</li>
                )}
            </ul>
          </Card.Description>

        </Card.Content>
      </Card>
      </div>
    );
  }
}
export default ProfileCard
