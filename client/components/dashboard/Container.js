import React from 'react';
import {Tabs, Tab } from 'react-bootstrap';
import Tweetlist from './Tweetlist';
import Profile from './Profile';
import Searchbar from './Searchbar';

const Container = React.createClass({
  getInitialState() {
    return {
      key: 1
    };
  },

  handleSelect(key) {
    this.setState({key});
  },

  render() {
    return (
      <Tabs justified activeKey={this.state.key} onSelect={this.handleSelect} id="controlled-tab-example">
        <Tab eventKey={1} title="Feed"><Tweetlist/></Tab>
        <Tab eventKey={2} title="Me"><Profile user={this.props.user}/></Tab>
        <Tab eventKey={3} title="Search"><Searchbar/></Tab>
      </Tabs>
    );
  }
});

export default Container;