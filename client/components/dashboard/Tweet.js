import React from 'react';

const Tweet = ({tweet}) => {
    return (
        <li className="list-group-item"
            key={tweet.id}>
                <div>
                <p><img width="64px" height="64px" src={tweet.user.profile_image_url}/>
                    {tweet.text}</p>
                <div className="flex-container" style={flex_style}>
                    <a style={fa_style}
                    href="#"
                    data-toggle="tooltip"
                    title="Retweet"><i className="fa fa-retweet" aria-hidden="true"></i></a>
                    <a style={fa_style}
                    href="#"
                    data-toggle="tooltip"
                    title="Like"><i className="fa fa-heart" aria-hidden="true"></i></a>
                    <a style={fa_style}
                    href="#"
                    data-toggle="tooltip"
                    title="Share"><i className="fa fa-share-square-o" aria-hidden="true"></i></a>
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