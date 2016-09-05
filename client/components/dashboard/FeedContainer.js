import React from 'react';
import {Tabs, Tab } from 'react-bootstrap';
import Tweetlist from './Tweetlist';
import Profile from './Profile';
import Searchbar from './Searchbar';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {home_timeline, user_timeline, search_tweets } from '../../actions';

class FeedContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {key: 1};
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(key) {
    this.setState({key});
    switch(key) {
      case 1: {
        home_timeline();
        break;
      }
      case 2: {
        user_timeline();
        break;
      }
    }
  }
  render() {
    return (
      <Tabs justified activeKey={this.state.key} onSelect={this.handleSelect} id="controlled-tab-example">
        <Tab eventKey={1} title="Feed"><Tweetlist /></Tab>
        <Tab eventKey={2} title="Profile"><Profile user={this.props.user}/><Tweetlist/></Tab>
        <Tab eventKey={3} title="Search"><Searchbar/><Tweetlist search={true}/></Tab>
      </Tabs>
    );
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({home_timeline, user_timeline}, dispatch)
const mapStateToProps = ({tweets}) => ({tweets});
export default connect(mapStateToProps, mapDispatchToProps)(FeedContainer);
