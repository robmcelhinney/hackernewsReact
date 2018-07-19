import React from 'react';
import NewsHeader from './NewsHeader';
import NewsList from './NewsList';

class App extends React.Component {
    constructor() {
        super();

        // this.state = {
        //     details: []
        // };
    }



    render() {
        // const { details } = this.state;
        // console.log("whoop1: " + {details})

        return (
            <div>
                <NewsHeader />
                <NewsList />
            </div>
        );
      }
}

export default App;


// <ul>
//     {items.map(item =>
//         <li>
//             {items_url} + {item} + '.json'
//         </li>
//     )}
// </ul>

// {items.slice(0, 3).map(item =>
//     fetch(items_url + item + '.json')
//         .then(res => res.json())
//         .then(res => this.setState({ details: res }))
//         .then(console.log("whoop: " + {details}))
// )}

// <NewsList details={details}/>


// componentDidMount() {
//     const { details } = this.state;
//     // const { items, details } = this.state;
//
//
//     fetch(topStories_url)
//         .then(res => res.json())
//         .then((res) =>
//             {res.slice(0, numberOfItems).map(item =>
//                 fetch(items_url + item + '.json')
//                     .then(response => response.json())
//                     .then(response => this.setState({ details: response }))
//                     .then(console.log({details}))
//             )}
//         )
//         .catch(function(error) {
//             console.log('There has been a problem with your fetch operation: ', error.message)
//         });
//
//     console.log('componentMounted');
//
// }
