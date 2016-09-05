import React from 'react';
import Tweetlist from './Tweetlist';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { search_tweets } from '../../actions';

class Searchbar extends React.Component {
	search(e) {
		e.preventDefault();
		search_tweets(document.getElementById('query').value);
		return false;
	}
	render() {
		return (
			<form onSubmit={this.search} className="navbar-form navbar-left">
        		<div className="form-group">
          			<input id="query" type="text"
          				   className="form-control"
          				   placeholder="Search tweets, users, etc"/>
        		</div>
       	 		<button type="submit" className="btn btn-default">Search</button>
      		</form>
      		
		);
	}
}

const mapDispatchToProps = (dispatch) => bindActionCreators({search_tweets}, dispatch);
export default connect(null, mapDispatchToProps)(Searchbar);
