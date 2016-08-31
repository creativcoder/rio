import { Modal, Button, Popover, OverlayTrigger, Tooltip, Glyphicon } from 'react-bootstrap';
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
      <Glyphicon onClick={this.open} glyph={this.props.glyph}/>
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
