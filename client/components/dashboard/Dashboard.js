import React from 'react';
import Navbar from './Navbar';
import Tweetlist from './Tweetlist';
import Tweetbox from './Tweetbox';
import { connect } from 'react-redux';
import FeedContainer from './FeedContainer';

class Dashboard extends React.Component {
    render() {
        return (
            <div className="dashboard container">
            <Navbar user={this.props.login.user}/>
            <FeedContainer user={this.props.login.user}/>
            </div>
        );
    }
}

const mapStateToProps = ({login}) => ({login});
export default connect(mapStateToProps)(Dashboard);
