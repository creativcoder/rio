import React from 'react';
import {Alert, Button} from 'react-bootstrap';
import Spinner from 'react-spinkit';

const Notification = React.createClass({
  getInitialState() {
    return {
      alertVisible: true
    };
  },

  render() {
    if (this.state.alertVisible) {
      return (
        <Alert bsStyle="danger" onDismiss={this.handleAlertDismiss}>
          <h4>Oh snap! You have no internet connection! Trying to Autoconnect</h4><span><Spinner spinnerName="circle" /></span>
          <p>
            <Button onClick={this.handleAlertDismiss}>Hide</Button>
          </p>
        </Alert>
      );
    }

    return (
      <Button onClick={this.handleAlertShow}>Show Alert</Button>
    );
  },

  handleAlertDismiss() {
    this.setState({alertVisible: false});
  },

  handleAlertShow() {
    this.setState({alertVisible: true});
  }
});

export default Notification;