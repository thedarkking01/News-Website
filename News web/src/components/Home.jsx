// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const NewsComponent = () => {
//   const [articles, setArticles] = useState([]);
  
//   useEffect(() => {
//     const fetchNews = async () => {
//       try {
//         // const apiKey = import.meta.env.NEWS_API_KEY;  // Access your API key
        
//         const response = await axios.get(
//           'https://newsapi.org/v2/top-headlines?country=us&apiKey=75550c8951494fd8b82de9cce141a506'
//         );
//         setArticles(response.data.articles);
//       } catch (error) {
//         console.error('Error fetching the news', error);
//       }
//     };
//     fetchNews();
//   }, []);
  
//   return (
//     <div>
//       <h1>Latest News</h1>
//       {articles.map((article) => (
//         <div key={article.url}>
//           <h2>{article.title}</h2>
//           <p>{article.description}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default NewsComponent;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const NewsComponent = () => {
//   const [articles, setArticles] = useState([]);
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   useEffect(() => {
//     const fetchNews = async () => {
//       try {
//         // const apiKey = import.meta.env.NEWS_API_KEY;  // Use your environment variable for the API key
//         const response = await axios.get(
//           'https://newsapi.org/v2/top-headlines?country=us&apiKey=75550c8951494fd8b82de9cce141a506'
//         );
//         setArticles(response.data.articles);
//       } catch (error) {
//         console.error('Error fetching the news', error);
//       }
//     };
//     fetchNews();
//   }, []);
  
//   return (
//     <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
//       <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Latest News</h1>
//       <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
//         {articles.map((article, index) => (
//           <div key={index} style={{ border: '1px solid #ddd', borderRadius: '10px', padding: '15px', backgroundColor: '#f9f9f9', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
//             <img 
//               src={article.urlToImage || 'https://via.placeholder.com/150'} 
//               alt={article.title} 
//               style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '10px', marginBottom: '15px' }} 
//             />
//             <h2 style={{ fontSize: '18px', marginBottom: '10px' }}>
//               <a href={article.url} target="_blank" rel="noopener noreferrer" style={{ color: '#007bff', textDecoration: 'none' }}>
//                 {article.title}
//               </a>
//             </h2>
//             <p style={{ fontSize: '14px', color: '#555' }}>{article.description}</p>
//             <a 
//               href={article.url} 
//               target="_blank" 
//               rel="noopener noreferrer" 
//               style={{ display: 'inline-block', marginTop: '10px', padding: '8px 12px', backgroundColor: '#007bff', color: '#fff', borderRadius: '5px', textDecoration: 'none' }}
//             >
//               Read more
//             </a>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default NewsComponent;

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const NewsComponent = () => {
  const [articles, setArticles] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false); // Dark Mode State

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          'https://newsapi.org/v2/top-headlines?country=us&apiKey=75550c8951494fd8b82de9cce141a506'
        );
        setArticles(response.data.articles);
      } catch (error) {
        console.error('Error fetching the news', error);
      }
    };
    fetchNews();
  }, []);

  // Function to toggle Dark Mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Conditional Styles for Dark and Light Mode
  const pageStyle = {
    backgroundColor: isDarkMode ? '#333' : '#f9f9f9',
    color: isDarkMode ? '#f9f9f9' : '#333',
    transition: 'background-color 0.5s, color 0.5s',
    padding: '20px',
    maxWidth: '1200px',
    margin: '0 auto'
  };

  const articleStyle = {
    border: '1px solid #ddd',
    borderRadius: '10px',
    padding: '15px',
    backgroundColor: isDarkMode ? '#444' : '#f9f9f9',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'background-color 0.5s'
  };

  return (
    <div style={pageStyle}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Latest News</h1>

      {/* Toggle Button for Dark/Light Mode */}
      <button
        onClick={toggleDarkMode}
        style={{
          padding: '10px 20px',
          backgroundColor: isDarkMode ? '#f9f9f9' : '#333',
          color: isDarkMode ? '#333' : '#f9f9f9',
          border: 'none',
          cursor: 'pointer',
          borderRadius: '5px',
          marginBottom: '20px'
        }}
      >
        {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '20px'
        }}
      >
        {articles.map((article, index) => (
          <div key={index} style={articleStyle}>
            <img
              src={article.urlToImage || 'https://via.placeholder.com/150'}
              alt={article.title}
              style={{
                width: '100%',
                height: '180px',
                objectFit: 'cover',
                borderRadius: '10px',
                marginBottom: '15px'
              }}
            />
            <h2 style={{ fontSize: '18px', marginBottom: '10px' }}>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: isDarkMode ? '#4e91ff' : '#007bff',
                  textDecoration: 'none'
                }}
              >
                {article.title}
              </a>
            </h2>
            <p style={{ fontSize: '14px', color: isDarkMode ? '#ddd' : '#555' }}>
              {article.description}
            </p>
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                marginTop: '10px',
                padding: '8px 12px',
                backgroundColor: isDarkMode ? '#4e91ff' : '#007bff',
                color: '#fff',
                borderRadius: '5px',
                textDecoration: 'none'
              }}
            >
              Read more
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsComponent;
