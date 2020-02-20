import React from 'react';
import { Link } from 'react-router-dom';

export default function NewsCard(props) {
  const article = props.article;
  return (
    <div className="card">
      <Link
        to={{
          pathname: '/news/details',
          state: {
            id: article.id,
            title: article.title,
            date: article.date,
            shortDescription: article.shortDescription,
          },
        }}
      >
        {article.title}
      </Link>
      <p>{new Date(article.date).toLocaleDateString()}</p>
      <p>{article.shortDescription}</p>
    </div>
  );
}
