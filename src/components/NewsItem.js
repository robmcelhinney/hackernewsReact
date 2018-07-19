import React from 'react';
import moment from 'moment';

class NewsItem extends React.Component {
    constructor() {
        super();
        this.getTitle = this.getTitle.bind(this);
        this.getTitleDomain = this.getTitleDomain.bind(this);
        this.getSubtext = this.getSubtext.bind(this);
        this.getRank = this.getRank.bind(this);
        this.getVote = this.getVote.bind(this);
    }

    getTitle(detail) {
        console.log("details log url: " + detail.url);
        return (
            // <a className="newsItem-titleLink" href="">Hello</a>
            <a className="newsItem-titleLink" href={detail.url}>{detail.title}</a>
        )
    }

    getTitleDomain(detail) {
        var parse = require('url-parse');
        return (
            parse(detail.url).hostname
        )
    }

    getSubtext(detail){
        return(
            <div className="newsItem-subtext">
                {detail.score} points by <a href={"https://news.ycombinator.com/user?id="+ detail.by}>{detail.by}</a> <a href={"https://news.ycombinator.com/item?id="+ detail.id}>{moment.unix(detail.time).fromNow()}</a> <a href={"https://news.ycombinator.com/item?id="+ detail.id}>{detail.descendants} comments</a>
            </div>
        )
    }

    getRank(index) {
        return(
            <div className="newsItem-rank">{index}</div>
        )
    }

    getVote() {
        return(
            <div className="newsItem-vote">
                <img src="https://news.ycombinator.com/grayarrow2x.gif" alt="upvote arrow" width="10"/>
            </div>
        )
    }

    render() {
        console.log("rendering newsItem");
        const detail = this.props.detail;
        const index = this.props.index;
        return(
            <div className="newsItem">
                {this.getRank(index)}
                {this.getVote()}
                <div className="newsItem-itemText">
                    {this.getTitle(detail)}
                    <a className="newsItem-titleDomain" href="">
                        ({this.getTitleDomain(detail)})
                    </a>
                    {this.getSubtext(detail)}
                </div>

            </div>

        )
    }
}

NewsItem.propTypes = {
    detail: React.PropTypes.object.isRequired
}

export default NewsItem;
