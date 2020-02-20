import React, {useState, useEffect} from 'react';
import axios from 'axios';

function Details(props) {
  const [article,setArticle] = useState(props.location.state);

  useEffect(() => {
    axios
      .get(
        `http://testtask.sebbia.com/v1/news/details?id=${props.location.state.id}`
      )
      .then(res => setArticle(res.data.news ))
      .catch(err => console.log(err));
  })

    return (
      <div>
        <h1>{article.title}</h1>
        <h2>{article.shortDescription}</h2>
        <p
          dangerouslySetInnerHTML={{
            __html: article.fullDescription,
          }}
        ></p>
      </div>
    );
  }

export default Details;
