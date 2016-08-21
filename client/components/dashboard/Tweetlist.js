import React from 'react';
import Tweet from './Tweet';

export default class Tweetlist extends React.Component {
	render() {
		return (
			<div className="feed">
				<Tweet/>
			</div>
		)
	}
}