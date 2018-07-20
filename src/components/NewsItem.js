import React from 'react';
import moment from 'moment';
import upvote from '../img/grayarrow2x.gif';

const base_url = 'https://hacker-news.firebaseio.com/v0/';
const items_url = base_url + 'item/';

class NewsItem extends React.Component {
    constructor() {
        super();
        this.getTitle = this.getTitle.bind(this);
        this.getTitleDomain = this.getTitleDomain.bind(this);
        this.getSubtext = this.getSubtext.bind(this);
        this.getRank = this.getRank.bind(this);
        this.getVote = this.getVote.bind(this);

        this.state = {
            item: []
        };
    }

    getTitle(item) {
        return (
            <span className="newsItem-titleLink">
                <a href={item.url}>{item.title}</a>
            </span>
        )
    }

    getTitleDomain(item) {
        var parse = require('url-parse');
        return (
            parse(item.url).hostname
        )
    }

    getSubtext(item){
        return(
            <div className="newsItem-subtext">
                {item.score} points by <a href={"https://news.ycombinator.com/user?id="+ item.by}>{item.by}</a> <a href={"https://news.ycombinator.com/item?id="+ this.props.detail}>{moment.unix(item.time).fromNow()}</a> | <a href={"https://news.ycombinator.com/item?id="+ this.props.detail}>{item.descendants} comments</a>
            </div>
        )
    }

    getRank(index) {
        return(
            <div className="newsItem-rank">{index}.</div>
        )
    }

    getVote() {
        return(
            <div className="newsItem-vote">
                <img src={upvote} alt="vote" width="10"/>
            </div>
        )
    }

    componentDidMount() {
        const detail = this.props.detail;

        fetch(items_url + detail + '.json')
            .then(res => res.json())
            .then(res => this.setState({ item: res }))
    }

    render() {
        const { index } = this.props;
        const { item } = this.state;
        return(
            <div className="newsItem">
                {this.getRank(index)}
                {this.getVote()}
                <div className="newsItem-itemText">
                    {this.getTitle(item)}
                    <span className="newsItem-titleDomain">
                        (<a href={"https://news.ycombinator.com/from?site=" + this.getTitleDomain(item)}>
                            {this.getTitleDomain(item)}
                        </a>)
                    </span>
                    {this.getSubtext(item)}
                </div>

            </div>

        )
    }
}

NewsItem.propTypes = {
    detail: React.PropTypes.number.isRequired
}

export default NewsItem;
