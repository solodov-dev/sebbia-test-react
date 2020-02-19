import React from 'react';
import axios from 'axios';

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      article: {},
    };
  }

  componentDidMount() {
    this.setState({ article: this.props.location.state });
    axios
      .get(
        `http://testtask.sebbia.com/v1/news/details?id=${this.props.location.state.id}`
      )
      .then(res => this.setState({ article: res.data.news }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <h1>{this.state.article.title}</h1>
        <h2>{this.state.article.shortDescription}</h2>
        <p
          dangerouslySetInnerHTML={{
            __html: this.state.article.fullDescription,
          }}
        ></p>
      </div>
    );
  }
}
export default Details;
