import React from 'react';
import Tweet from './Tweet';
import { connect } from 'react-redux';
import Spinner from 'react-spinkit';


class Tweetlist extends React.Component {
	renderTweets() {
		return this.props.tweets.map(function(tweet) {
			return (<Tweet key={tweet.id} tweet={tweet}/>);
		});
	}
	renderSpinner() {
		return <div style={parent_style}><div><br/><Spinner spinnerName='three-bounce' /></div></div>;
	}
	render() {
		return (
			<ul className="list-group col-sm-12">
				{ this.props.tweets.length>0?this.renderTweets():this.renderSpinner() }
			</ul>
		)
	}
}

const parent_style = {
	textAlign: 'center',
	'display':'flex',
	'justifyContent':'center'
}

const mapStateToProps = ({tweets}) => ({tweets});
export default connect(mapStateToProps)(Tweetlist);
