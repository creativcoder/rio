import React from 'react';
import { connect } from 'react-redux';
import { postTweet } from '../../actions';
import { bindActionCreators } from 'redux';

class Tweetbox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {cur_chars: 140, max_chars: 140};
        this.count_chars = this.count_chars.bind(this);
    }
    count_chars(event) {
        const btn = document.querySelector('.tweet-btn');
        (this.state.cur_chars < 0)? btn.setAttribute("disabled",""): btn.removeAttribute("disabled");
        this.setState({cur_chars: this.state.max_chars-event.target.value.length})
    }
    render() {
        return (
            <div style={box_style}>
                <textarea className="form-control new-tweet" onChange={this.count_chars} width={200} height={200}></textarea><br/>
                <span>{this.state.cur_chars}
                <button className="tweet-btn btn btn-primary pull-right" onClick={()=> {
                    const status = document.querySelector('.new-tweet').value;
                    this.props.postTweet(status)
                    }
                }>Tweet!</button>
                </span>
            </div>
        )
    }
}

const box_style = {
    'paddingBottom': '20px'
}

const mapDispatchToProps = (dispatch) => bindActionCreators({postTweet}, dispatch)
export default connect(null, mapDispatchToProps)(Tweetbox);