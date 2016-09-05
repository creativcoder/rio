import React from 'react';
import Tweet from './Tweet';
import { connect } from 'react-redux';
import Spinner from 'react-spinkit';

class Tweetlist extends React.Component {
	renderTweets() {
		if (this.props.search_result.statuses) {
			return this.props.search_result.statuses.map((tweet) => (<Tweet key={tweet.id} tweet={tweet}/>));	
		} else {
			return this.props.tweets.map((tweet) => (<Tweet key={tweet.id} tweet={tweet}/>));
		}
	}
	renderSpinner() {
		return <div style={parent_style}><div><br/><Spinner spinnerName='three-bounce' /></div></div>;
	}
	render() {
		return (
			<ul className="list-group col-sm-12">
				{ this.props.tweets.length>0? this.renderTweets():this.renderSpinner() }
			</ul>
		)
	}
}

const parent_style = {
	textAlign: 'center',
	'display':'flex',
	'justifyContent':'center'
}

const mapStateToProps = ({tweets, search_result}) => ({tweets, search_result});
export default connect(mapStateToProps)(Tweetlist);
