import { Modal, Button, Popover, OverlayTrigger, Tooltip } from 'react-bootstrap';
import React from 'react';
import Tweetbox from './Tweetbox';

const Example = React.createClass({
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
    const popover = (
      <Popover id="modal-popover" title="popover">
        very popover. such engagement
      </Popover>
    );
    const tooltip = (
      <Tooltip id="modal-tooltip">
        wow.
      </Tooltip>
    );

    return (
      <div>
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
          <Tweetbox/>
          </div>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
});



export default Example;