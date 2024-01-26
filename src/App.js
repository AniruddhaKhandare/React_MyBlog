import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Components
import Navbar from "./Components/Navbar";

// Pages 
import Home from "./pages/Home";
import About from "./pages/About";
import Article from "./pages/Article";
import ArticlesList from "./pages/ArticlesList";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="max-w-screen-md mx-auto pt-20">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/article/:name" element={<Article />} />
          <Route exact path="/articles-list" element={<ArticlesList />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router >
  );
};

export default App;
