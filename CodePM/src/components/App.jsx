import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Typing from './Typing';

const images = import.meta.glob('./assets/**/*.{png,jpg,jpeg,svg}', { eager: true });

const imageUrls = Object.values(images).map((module) => module.default);

preloadImages(imageUrls)
  .then(() => console.log('All images preloaded'))
  .catch((err) => console.error('Error loading images', err));

function preloadImages(urls) {
  return Promise.all(
    urls.map((url) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = url;
        img.onload = resolve;
        img.onerror = reject;
      });
    })
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/typing-test" element={<Typing />} />
      </Routes>
    </Router>
  );
}

export default App;