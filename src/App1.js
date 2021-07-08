import React, { Component } from "react";
import api from "./services/articles-service";
import Articles from "./componentsA/Articles/Articles";
import SearchForm from "./componentsA/SerachForm";

class App1 extends Component {
  state = {
    articles: [],
    currentPage: 1,
    currentQuery: "",
    isLoading: false,
    error: null,
  };
  componentDidMount() {}
  componentDidUpdate(prevProps, prevState) {
    if (prevState.currentQuery !== this.state.currentQuery) {
      this.populateArticles();
    }
  }

  onFormSubmit = (searchQuery) => {
    this.setState({
      currentQuery: searchQuery,
      currentPage: 1,
      articles: [],
      error: null,
    });
  };

  populateArticles = () => {
    this.setState({ isLoading: true });
    const { currentQuery, currentPage } = this.state;
    const normalizedQuery =
      currentQuery[0] === " " ? currentQuery.slice(1) : currentQuery;

    const fetchOptions = {
      currentQuery: normalizedQuery,
      currentPage,
    };

    api
      .fetchArticles(fetchOptions)
      .then((articles) => {
        this.setState((prevState) => ({
          currentPage: prevState.currentPage + 1,
          articles: [...prevState.articles, ...articles],
        }));
      })
      .catch((error) => {
        this.setState({ error });
      })
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };

  handleBtnMoreClock = () => {
    this.populateArticles();
  };

  render() {
    const { articles, isLoading } = this.state;

    return (
      <section>
        <h1>Articles</h1>
        <SearchForm onFormSubmit={this.onFormSubmit} />

        {this.state.articles.length > 0 ? (
          <>
            <Articles articles={articles} />
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              <button type="button" onClick={this.handleBtnMoreClock}>
                Load more
              </button>
            )}
          </>
        ) : (
          <p>{isLoading ? "Loading..." : "Waiting search..."}</p>
        )}
      </section>
    );
  }
}

export default App1;
