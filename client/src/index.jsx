import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }

    this.retreiveLatest25Repos = this.retreiveLatest25Repos.bind(this);
  }

  componentDidMount() {
    console.log('$$$$ componentDidMount $$$$');
    this.retreiveLatest25Repos();
  }

  retreiveLatest25Repos() {
    $.ajax({
      type: 'GET',
      url: 'http://localhost:1128/repos',
      success: (data) => {
        let parsedData = JSON.parse(data);

        console.log('Top 25 repos => ', parsedData);

        this.setState({ repos: parsedData });
      },
      error: (err) => {
        console.log('Error: GET request => ', err)
      }
    })
  }

  search (term) {
    console.log(`${term} was searched`);
    // TODO

    // ajax call to endpoint POST
    $.ajax({
      type: 'POST',
      url: 'http://localhost:1128/repos',
      data: term,
      success: (msg) => {
        console.log('Successful POST: ', msg);
        this.retreiveLatest25Repos();
      },
      error: (err) => {
        console.log('Error: POST => ', err);
      }
    });


  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <Search onSearch={this.search.bind(this)}/>
      <RepoList repos={this.state.repos}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));