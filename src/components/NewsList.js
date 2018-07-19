import React from 'react';
import NewsItem from './NewsItem'

const base_url = 'https://hacker-news.firebaseio.com/v0/';
const topStories_url = base_url + 'topstories.json';
const items_url = base_url + 'item/';
const numberOfItems = 30;

class NewsList extends React.Component {
    constructor() {
        super();
        // this.getListItem = this.getListItem.bind(this);

        this.state = {
            details: []
        };
    }

    componentDidMount() {
        const { details } = this.state;

        // var detailArray = [];
        // let a = [];

        fetch(topStories_url)
            .then(res => res.json())
            .then((res) =>
                {res.slice(0, numberOfItems).map((item, index) =>
                    fetch(items_url + item + '.json')
                        .then(response => response.json())
                        .then(response => this.setState({ details: [...this.state.details, response] }))
                        // .then(response => a[index] = response)
                        // .then(response => a.push(response))
                )}
            )
            // .then(this.setState({ details: a }))
            .catch(function(error) {
                console.log('There has been a problem with your fetch operation: ', error.message)
            });

        // console.log('componentMounted');

    }



    render() {
        // const { details } = this.state;
        // console.log(this.state.details.length);
        return (
          <div className="newsList">
              <div className="newsList">
                  {this.state.details.map((detail, index) => {
                      return <NewsItem detail={detail}
                          index={index+1}/>
                  })}
              </div>
          </div>
        );
    }
}

export default NewsList;


// <div className="newsList">
    // {details.map(detail =>
    //     <NewsItem detail={detail}/>
    // )}
// </div>
