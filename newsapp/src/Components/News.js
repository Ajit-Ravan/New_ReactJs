import React, { useEffect, useState } from "react";

import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  // document.title = `${capitalizeFirstLetter(props.category)} - NewsApp`

  //function for capitalize the first letter of title
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  //adding new function for the removing duplication of the code

  const updateNews = async () => {
    props.setProgress(0);
    console.log("Inside updatenews function.");
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    //fetching data from url
    let data = await fetch(url);
    props.setProgress(30);
    //converting data into json data
    let parseData = await data.json();
    console.log(parseData);
    props.setProgress(70);
    //setting state ,setting articles
    setArticles(parseData.articles);
    setLoading(true);
    setTotalResults(parseData.totalResults);
    props.setProgress(100);
  };

  // Instead of componentDidMount we used useEffect
  useEffect(() => {
    updateNews();
  }, []);

  //Previous button onClick function
  const handlePrevClick = async () => {
    setPage(page - 1);
    updateNews();
  };

  //Next button onClick function
  const handleNextClick = async () => {
    setPage(page + 1);
    updateNews();
  };

  const fetchMoreData = async () => {
    setPage(page + 1);
    console.log("Inside updatenews function.");
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    //fetching data from url
    let data = await fetch(url);
    //converting data into json data
    let parseData = await data.json();
    console.log(parseData);
    //setting state ,setting articles
    setArticles(articles.concat(parseData.articles));
    setTotalResults(parseData.totalResults);
    setLoading(false);
  };

  return (
    <div className="container" style={{ padding: "0px 0px 0px 65px" }}>
      <h2 className="text-center" style={{ margin: "30px 0px" }}>
        News App : Top {capitalizeFirstLetter(props.category)} Headlines
      </h2>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container pt-2">
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col-md-4 mb-2" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 40) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 80)
                        : ""
                    }
                    ImageUrl={element.urlToImage}
                    newsUrl={element?.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </div>
  );
};
News.defaultProps = {
  country: "in",
  category: "general",
  pageSize: 8,
};

News.propTypes = {
  country: PropTypes.string,
  category: PropTypes.string,
  pageSize: PropTypes.number,
};

export default News;
