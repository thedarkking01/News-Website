import React, { useState } from 'react';
import axios from 'axios';

const Search = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null); // State for error

  const searchNews = async (e) => {
    e.preventDefault();
    if (!query.trim()) {
      return; // Avoid searching if query is empty or just spaces
    }

    try {
      const response = await axios.get(`https://newsapi.org/v2/everything?q=${query}&apiKey=75550c8951494fd8b82de9cce141a506`);
      if (response.data.articles) {
        setResults(response.data.articles);
      } else {
        setResults([]); // Handle case where no articles are returned
      }
    } catch (error) {
      console.error('Error searching news', error);
      setError('An error occurred while fetching the news. Please try again.');
    }
  };

  return (
    <div className="container">
      <h1>Search News</h1>
      <form onSubmit={searchNews}>
        <input 
          type="text" 
          value={query} 
          onChange={(e) => setQuery(e.target.value)} 
          placeholder="Search news..." 
          className="form-control" 
        />
        <button type="submit" className="btn btn-primary mt-2">Search</button>
      </form>

      {/* Error handling */}
      {error && <p className="text-danger mt-3">{error}</p>}

      {/* Display message if no results */}
      {results.length === 0 && query && !error && (
        <p className="mt-4">No results found for "{query}".</p>
      )}

      <div className="row mt-4">
        {results.map(article => (
          <div className="col-md-4" key={article.url}>
            <div className="card mb-4">
              <img 
                src={article.urlToImage || 'https://via.placeholder.com/150'} 
                className="card-img-top" 
                alt={article.title} 
              />
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

export default Search;
