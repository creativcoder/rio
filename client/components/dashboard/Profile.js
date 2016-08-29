import React from 'react';
import { Button, Jumbotron } from 'react-bootstrap';
import { connect } from 'react-redux';

class Profile extends React.Component {
	render() {
		return (<Jumbotron>
    <h1><img width={96} height={96} src={this.props.user?this.props.user.avatar:"https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"}/>
    &nbsp;&nbsp;
    {this.props.user?this.props.user.name:""}</h1>
    <p>@{this.props.user?this.props.user.alias:""}</p>
    <p><Button bsStyle="primary">Edit Profile</Button></p>
  </Jumbotron>);
	}
}

export default Profile;