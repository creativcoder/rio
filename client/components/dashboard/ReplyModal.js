import { Modal, Button, Popover, OverlayTrigger, Tooltip } from 'react-bootstrap';
import React from 'react';
import Tweetbox from './Tweetbox';

class ReplyModal extends React.Component {
	constructor(props) {
		super(props);
		this.state = { showModal : false };
		this.open = this.open.bind(this);
		this.close = this.close.bind(this);
	}
	open() {
    	this.setState({ showModal: true });
  	}

  close() {
    this.setState({ showModal: false });
  }
	render() {
		return (
      <div>
        <i onClick={this.open} className="fa fa-reply" aria-hidden="true"></i>
        <Modal show={this.state.showModal} onHide={this.close}>
        <Modal.Header closeButton>
          <Modal.Title>Reply to @{this.props.entities.alias}!</Modal.Title>
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
}

export default ReplyModal;
