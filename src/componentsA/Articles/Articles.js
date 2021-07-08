import React from "react";

import { v4 as uuidv4 } from "uuid";

const Articles = ({ articles }) => (
  <ul>
    {articles.map(
      ({ title, content, author, urlToImage, description, url }) => (
        <li key={uuidv4()}>
          <a href={url} target="_blank" rel="noreferrer">
            <h2>{title}</h2>
          </a>
          {/* <img width="400" src={urlToImage} alt={description} /> */}
          {/* <p>{content}</p>
          <h3>{author}</h3> */}
        </li>
      )
    )}
  </ul>
);

export default Articles;
