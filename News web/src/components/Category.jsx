import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Category = () => {
  const { category } = useParams();
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchCategoryNews = async () => {
      try {
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=75550c8951494fd8b82de9cce141a506`);
        setArticles(response.data.articles);
      } catch (error) {
        console.error('Error fetching the category news', error);
      }
    };
    fetchCategoryNews();
  }, [category]);

  return (
    <div className="container">
      <h1>{category.charAt(0).toUpperCase() + category.slice(1)} News</h1>
      <div className="row">
        {articles.map(article => (
          <div className="col-md-4" key={article.url}>
            <div className="card mb-4">
              <img src={article.urlToImage} className="card-img-top" alt={article.title} />
              <div className="card-body">
                <h5 className="card-title">{article.title}</h5>
                <p className="card-text">{article.description}</p>
                <a href={article.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Read More</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
