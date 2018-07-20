import React from 'react';
import NewsItem from './NewsItem'

const base_url = 'https://hacker-news.firebaseio.com/v0/';
const topStories_url = base_url + 'topstories.json';
const numberOfItems = 30;

class NewsList extends React.Component {
    constructor() {
        super();
        this.state = {
            details: []
        };
    }

    componentDidMount() {
        fetch(topStories_url)
            .then(res => res.json())
            .then(res => this.setState({ details: res }))
    }


    render() {
        return (
            <div className="newsList-newsItems">
                {this.state.details.slice(0, numberOfItems).map(function(detail, index) {
                    return <NewsItem key={index} detail={detail}
                        index={index+1}/>
                })}
            </div>
        );
    }
}

export default NewsList;
