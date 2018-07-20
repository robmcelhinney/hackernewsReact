import React from 'react';
import NewsHeader from './NewsHeader';
import NewsList from './NewsList';

class App extends React.Component {

    render() {
        return (
            <div className="newsList">
                <NewsHeader />
                <NewsList />
            </div>
        );
      }
}

export default App;
