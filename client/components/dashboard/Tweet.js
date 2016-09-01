import React from 'react';
import { store } from '../../index';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { retweet, likeTweet } from '../../actions';
import ReplyModal from './ReplyModal';
import {Media} from 'react-bootstrap';
import {Glyphicon} from 'react-bootstrap';

const Tweet = ({tweet, retweet, likeTweet}) => {
    return (
        <div><br/>
        <Media>
        <Media.Left>
        <img width={64} height={64} src={tweet.user.profile_image_url} alt="Profile"/>
        </Media.Left>
        <Media.Body>
        <Media.Heading>{tweet.user.name}(<strong>@{tweet.user.screen_name}</strong>)</Media.Heading>
        <p>{tweet.text}</p>
        <div className="flex-container" style={flex_style}>
            <ReplyModal entities={{
                    type: "reply",
                    alias: tweet.user.screen_name,
                    recepient: tweet.id_str }}/>
            <a onClick={e => (retweet(tweet))}
               style={fa_style}
               href="#"
               data-toggle="tooltip"
               title="Retweet">
               <i style={tweet.retweeted?retweet_style:fa_style}
               className="fa fa-retweet"
               aria-hidden="true">&nbsp;{tweet.retweet_count}</i></a>

            <a onClick={e=> (likeTweet(tweet))}
               style={fa_style}
               href="#"
               data-toggle="tooltip"
               title="Like">
               <i style={tweet.favorited?heart_style:fa_style}
               className="fa fa-heart"
               aria-hidden="true"></i></a>
        </div>
        </Media.Body>
        </Media>
        </div>
    );
}

const heart_style = {
    color: 'red'
}

const retweet_style = {
    color: 'green'
}

const fa_style = {
    'color':'inherit'
}

const flex_style = {
    'display':'flex',
    'justifyContent':'space-around'
}

const mapDispatchToProps = (dispatch) => bindActionCreators({retweet, likeTweet}, dispatch);
export default connect(null, mapDispatchToProps)(Tweet);
