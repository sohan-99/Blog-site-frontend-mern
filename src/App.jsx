
import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/home/HomePage';
import ArticleDetailPage from './pages/articleDetail/ArticleDetailPage';
// import ArticleDetailPage from './pages/home/ArticleDetail/ArticleDetailPage'
function App() {
  return (
    <div className="App font-opensans w-full">
    <Routes>
  <Route path="/" element={<HomePage />} />
  <Route path="/blog/:id" element={<ArticleDetailPage />} />
</Routes>

  </div>
  );
}

export default App;
