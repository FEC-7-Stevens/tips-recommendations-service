// TO DO:
  // IF NO ARTICLES FOR RESTAURANT EXIST, DO NOT INCLUDE ARTICLES SECTION OF PAGE

import React from 'react';
import ReactDOM from 'react-dom';

const axios = require('axios');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = '';
  }

  componentDidMount() {
    axios.all([getTips(), getArticles()])
    .then(axios.spread(function (tips, articles) {
      console.log('Client GET requests complete');
    }));
  }

  componentWillUnmount() {

  }

  function getTips() {
    return axios.get('/api/tips/:id');
  }

  function getArticles() {
    return axios.get('/api/articles/:id');
  }

  render() {
    return (
      <section id='what-to-order'>
        <h3>WHAT TO ORDER</h3>
        <figure class='dish'>
          <img src='' alt=''/>
          <figcaption>DISH NAME</figcaption>
        </figure>
        <figure class='dish'>
          <img src='' alt=''/>
          <figcaption>DISH NAME</figcaption>
        </figure>
        <figure class='dish'>
          <img src='' alt=''/>
          <figcaption>DISH NAME</figcaption>
        </figure>
      </section>

      <section id='insider-tip'>
        <h3>INSIDER TIP</h3>
        <hr/>
        <p>RANDOM TEXT HERE</p>
        <hr/>
      </section>

      <section id='known-for'>
        <figure class='feature'>
          <img src='' alt=''/>
          <figcaption>FEATURE</figcaption>
        </figure>
        <figure class='feature'>
          <img src='' alt=''/>
          <figcaption>FEATURE</figcaption>
        </figure>
        <figure class='feature'>
          <img src='' alt=''/>
          <figcaption>FEATURE</figcaption>
        </figure>
      </section>

      <section id='articles'>
        <figure class='article'>
          <img src='' alt=''/>
          <figcaption>ARTICLE</figcaption>
        </figure>
        <figure class='article'>
          <img src='' alt=''/>
          <figcaption>ARTICLE</figcaption>
        </figure>
      </section>
    );
  }
}

export default App;

ReactDOM.render(<App />, document.getElementById('app'));