import React from 'react';
import axios from 'axios';
import NewsList from './NewsList';

class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      selectedCategory: 0,
    };
  }

  componentDidMount() {
    axios
      .get('https://testtask.sebbia.com/v1/news/categories')
      .then(res => this.setState({ categories: res.data.list }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <React.Fragment>
        <ul>
          {this.state.categories.map(category => (
            <li onClick={() => this.setState({selectedCategory: category.id})}>{category.name}</li>
          ))}
        </ul>
        <NewsList id={this.state.selectedCategory} />
      </React.Fragment>
    );
  }
}

export default Categories;
