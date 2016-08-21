import React from 'react';

export default class Searchbar extends React.Component {
	render() {
		return (
			<form className="navbar-form navbar-left">
        		<div className="form-group">
          			<input type="text" className="form-control" placeholder="Search tweets, users, etc"/>
        		</div>
       	 		<button type="submit" className="btn btn-default">Search</button>
      		</form>
		);
	}
}