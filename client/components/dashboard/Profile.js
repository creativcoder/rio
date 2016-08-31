import React from 'react';
import { Button, Jumbotron, Media } from 'react-bootstrap';
import { connect } from 'react-redux';

class Profile extends React.Component {
	render() {
		return (
			<Jumbotron>
            <Media>
            <Media.Left>
                <img width={96} height={96} src={this.props.user?this.props.user.avatar:"https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"}/>
            </Media.Left>
            <Media.Body>
            <Media.Heading>
                <h3>{this.props.user?this.props.user.name:""}</h3>{' '}@{this.props.user?this.props.user.alias:""}
            </Media.Heading>
            <Button bsStyle="primary">Edit Profile</Button>
            </Media.Body>
            </Media>
  </Jumbotron>);
	}
}

export default Profile;