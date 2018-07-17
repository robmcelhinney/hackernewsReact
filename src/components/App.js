import React from 'react';
import NewsItem from './NewsItem'
import NewsHeader from './NewsHeader'

class App extends React.Component {
    render() {
          return (
              <div>
                  <NewsHeader/>
                  <NewsItem/>
              </div>
          );
      }
}

export default App;
