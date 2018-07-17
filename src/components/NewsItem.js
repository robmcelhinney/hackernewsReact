import React from 'react';

class NewsItem extends React.Component {

    getTitle() {
        return (
            <a className="newsItem-titleLink" href="">Title</a>
        )
    }

    getTitleDomain() {
        return (
            <a className="newsItem-titleDomain" href="">(domain.com)</a>
        )
    }

    getSubtext(){
        return(
            <div className="newsItem-subtext">subtext this will probably be far longer</div>
        )
    }

    getRank() {
        return(
            <div className="newsItem-rank">1</div>
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
        return(
            <div className="newsItem">
                {this.getRank()}
                {this.getVote()}
                <div className="newsItem-itemText">
                    {this.getTitle()}
                    {this.getTitleDomain()}
                    {this.getSubtext()}
                </div>

            </div>

        )
    }
}

export default NewsItem;
