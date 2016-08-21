import React from 'react';
import Navbar from './Navbar';
import Tweetlist from './Tweetlist';

export default class Dashboard extends React.Component {
	render() {
		return (
			<div className="dashboard container">
			<Navbar/>
			<Tweetlist/>
			</div>
		);
	}
}