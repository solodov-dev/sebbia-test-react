import React from 'react';
import { Link } from 'react-router-dom';

export default function NewsCard(props) {
  return (
    <div className="card">
      <Link
        to={{
          pathname: '/news/details',
          state: {
            id: props.item.id,
            title: props.item.title,
            date: props.item.date,
            shortDescription: props.item.shortDescription,
          },
        }}
      >
        {props.item.title}
      </Link>
      <p>{new Date(props.item.date).toLocaleDateString()}</p>
      <p>{props.item.shortDescription}</p>
    </div>
  );
}
