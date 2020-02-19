import React from 'react';
import { Link } from 'react-router-dom';

export default function NewsCard(props) {
  return (
    <div className="card">
      <Link
        to={{
          pathname: '/news/details',
          state: {
            id: props.id,
            title: props.title,
            date: props.date,
            shortDescription: props.shortDescription,
          },
        }}
      >
        {props.title}
      </Link>
      <p>{new Date(props.date).toLocaleDateString()}</p>
      <p>{props.shortDescription}</p>
    </div>
  );
}
