import React from 'react';
import Tweet from './Tweet';
import { connect } from 'react-redux';

class Tweetlist extends React.Component {
	renderTweets() {
		return this.props.tweets.map(function(tweet) {
			return (<Tweet key={tweet.id} tweet={tweet}/>);
		});
	}
	render() {
		return (
			<ul className="list-group col-sm-14">
				{ this.props.tweets.length>0?this.renderTweets():<h3>Oops, something went wrong :|</h3> }
			</ul>
		)
	}
}

const mapStateToProps = ({tweets, login}) => ({tweets, login});
export default connect(mapStateToProps, null)(Tweetlist);
