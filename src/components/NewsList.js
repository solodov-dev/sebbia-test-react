import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsCard from './NewsCard';

function NewsList(props) {
  const [page, setPage] = useState(0);
  const [news, setNews] = useState([]);
  const [prevId, setPrevId] = useState(props.id);

  useEffect(() => {
    if (props.id !== prevId) {
      setPrevId(props.id);
      setPage(0);
    }
  }, [props.id, page, prevId]);

  useEffect(() => {
    axios
      .get(
        `https://testtask.sebbia.com/v1/news/categories/${props.id}/news?page=${page}`
      )
      .then(res => setNews(res.data.list));
  });

  return (
    <React.Fragment>
      {news.length === 10 && (
        <button onClick={() => setPage(page + 1)}>Вперед</button>
      )}
      {page > 0 && <button onClick={() => setPage(page - 1)}>Назад</button>}
      {news.map(item => (
        <ul>
          <li>
            <NewsCard item={item} />
          </li>
        </ul>
      ))}
    </React.Fragment>
  );
}

export default NewsList;
