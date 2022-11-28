import { Routes, Route } from 'react-router-dom';

import './scss/app.scss';
import MainLayout from './layouts/MainLayout';

import { Series } from './pages/series';
import { Characters } from './pages/characters';
import { Comics } from './pages/comics';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Characters />} />
        <Route path="/comics" element={<Comics />} />
        <Route path="/series" element={<Series />} />
      </Route>
    </Routes>
  );
};

export default App;
