import axios from "axios";
axios.defaults.headers.common["Authorization"] =
  "Bearer 5bbf58ddc027440e9102045fa5f0f3d2";

const fetchArticles = ({ currentQuery, currentPage = 1, size = 5 }) =>
  axios
    .get(
      `https://newsapi.org/v2/everything?q=${currentQuery}&pageSize=${size}&page=${currentPage}`
    )
    .then(({ data }) => data.articles);

const api = {
  fetchArticles,
};

export default api;
