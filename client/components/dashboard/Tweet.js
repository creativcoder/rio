import React from 'react';

// TODO substitute actual tweet properties
const Tweet = ({tweet}) => {
    return (
        <li className="list-group-item"
            key={tweet.id}>
                <div>
                <p><img width="64px" height="64px" src="http://dummyimage.com/300"/>
                    {tweet.content}<br/>
                    {tweet.description}</p>
                <div className="flex-container" style={flex_style}>
                    <a style={fa_style} href="#" data-toggle="tooltip" title="Retweet"><i className="fa fa-retweet" aria-hidden="true"></i></a>
                    <a style={fa_style} href="#" data-toggle="tooltip" title="Like"><i className="fa fa-heart" aria-hidden="true"></i></a>
                    <a style={fa_style} href="#" data-toggle="tooltip" title="Share"><i className="fa fa-share-square-o" aria-hidden="true"></i></a>
                </div>
                </div>
            </li>
    );
}

const fa_style = {
    'color':'inherit'
}

const flex_style = {
    'display':'flex',
    'justifyContent':'space-around'
}

export default Tweet;