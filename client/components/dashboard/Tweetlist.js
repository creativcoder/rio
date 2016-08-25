import React from 'react';
import Tweet from './Tweet';
import { connect } from 'react-redux';

class TweetList extends React.Component {
	renderTweets() {
		return this.props.tweets.map(function(tweet) {
			return (<Tweet key={tweet.id} tweet={tweet}/>);
		});
	}
	render() {
		return (
			<ul className="list-group col-sm-4">
				{ this.renderTweets() }
			</ul>
		)
	}
}
