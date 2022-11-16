import { Routes, Route } from 'react-router-dom';

import './scss/app.scss';
import MainLayout from './layouts/MainLayout';
import { Characters } from './components/Characters';
import { Comics } from './components/Comics';
import { Series } from './components/Series';

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
