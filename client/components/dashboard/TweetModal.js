import { Modal, Button, Popover, OverlayTrigger, Tooltip } from 'react-bootstrap';
import React from 'react';
import Tweetbox from './Tweetbox';

const TweetModal = React.createClass({
  getInitialState() {
    return { showModal: false };
  },
  close() {
    this.setState({ showModal: false });
  },
  open() {
    this.setState({ showModal: true });
  },
  render() {
    return (
      <div>
        <i onClick={this.open} className="fa fa-retweet" aria-hidden="true"></i>
        <Button
          bsStyle="primary"
          bsSize="large"
          onClick={this.open}>
          Post
        </Button>
        <Modal show={this.state.showModal} onHide={this.close}>
        <Modal.Header closeButton>
          <Modal.Title>Post a Tweet!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <div>
          <Tweetbox entities={this.props.entities}/>
          </div>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
});

export default TweetModal;
