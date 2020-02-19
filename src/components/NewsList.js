import React from 'react';
import axios from 'axios';
import NewsCard from './NewsCard';

class NewsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      news: [],
    };
  }

  componentDidUpdate() {
    this.getNews();
  }

  componentDidMount() {
    this.getNews();
  }

  getNews = () => {
    axios
      .get(
        `https://testtask.sebbia.com/v1/news/categories/${this.props.id}/news?page=${this.state.page}`
      )
      .then(res => this.setState({ news: res.data.list }));
  };

  flipPage = num => {
    let page = this.state.page + num;
    this.setState({ page: page });
  };

  getBackButton = () => {
    if (this.state.news.length === 10) {
      return <button onClick={() => this.flipPage(1)}>Вперед</button>;
    }
  };

  getForwardButton = () => {
    if (this.state.page > 0) {
      return <button onClick={() => this.flipPage(-1)}>Назад</button>;
    }
  };

  render() {
    return (
      <React.Fragment>
        {this.getBackButton()}
        {this.getForwardButton()}
        {this.state.news.map(item => (
          <ul>
            <li>
              <NewsCard
                id={item.id}
                title={item.title}
                date={item.date}
                shortDescription={item.shortDescription}
              />
            </li>
          </ul>
        ))}
      </React.Fragment>
    );
  }
}

export default NewsList;
