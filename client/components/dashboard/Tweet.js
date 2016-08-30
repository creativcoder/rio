import React from 'react';
import { store } from '../../index';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { retweet, likeTweet } from '../../actions';
import ReplyModal from './ReplyModal';
import { Collapse, Well } from 'react-bootstrap';

const Tweet = ({tweet, retweet, likeTweet}) => {
    return (
        <li className="list-group-item"
            key={tweet.id}>
                <div>
                <h5><img width="64px" height="64px" src={tweet.user.profile_image_url}/>
                    &nbsp;&nbsp;{tweet.user.name}(<strong>@{tweet.user.screen_name}</strong>)<br/>{tweet.text}
                    </h5>
                <div className="flex-container" style={flex_style}>
                    <ReplyModal entities={
                        {   
                            type: "reply",
                            alias: tweet.user.screen_name,
                            recepient: tweet.id_str
                        }
                    }/>
                    <a onClick={e => {
                        modify_style('.retweet'+tweet.id_str);
                        retweet(tweet);
                        }}
                    style={fa_style}
                    href="#"
                    data-toggle="tooltip"
                    title="Retweet"><i className={`fa fa-retweet retweet`+tweet.id_str} aria-hidden="true">&nbsp;{tweet.retweet_count}</i>
                    </a>

                    <a onClick={e=> {
                        modify_style('.heart'+tweet.id_str);
                        likeTweet(tweet.id_str);
                        }}
                    style={fa_style}
                    href="#"
                    data-toggle="tooltip"
                    title="Like"><i className={`fa fa-heart heart`+tweet.id_str} aria-hidden="true"></i>
                    </a>
                </div>
                </div>
            </li>
    );
}

const modify_style = (query) => {
    console.log('query');
        if (query.includes('retweet')) {
            let icon = document.querySelector(query);
            if (icon.style.color==='green') {
                icon.style.color = 'inherit';
            } else {
                icon.style.color = 'green';
            }
        } else if(query.includes('heart')) {
            let icon = document.querySelector(query);
            if (icon.style.color==='red') {
                icon.style.color = 'inherit';
            } else {
                icon.style.color = 'red';
            }
        }
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
