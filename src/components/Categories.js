import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsList from './NewsList';

function Categories() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(0);

  useEffect(() => {
    axios
      .get('https://testtask.sebbia.com/v1/news/categories')
      .then(res => setCategories(res.data.list))
      .catch(err => console.log(err));
  });

  return (
    <React.Fragment>
      <ul>
        {categories.map(category => (
          <li onClick={() => setSelectedCategory(category.id)}>
            {category.name}
          </li>
        ))}
      </ul>
      <NewsList id={selectedCategory} />
    </React.Fragment>
  );
}

export default Categories;
