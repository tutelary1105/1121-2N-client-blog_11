import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage_11 from './pages/HomePage.11';
import BlogStaticPage_11 from './pages/BlogStaticPage_11';
import BlogNodeServer_11 from './pages/BlogNodeServer_11';
import BlogSupabase_11 from './pages/BlogSupabase_11';
import BlogLocalJson_11 from './pages/BlogLocalJson_11';

const App_11 = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exct path='/' element={<HomePage_11 />} />
        <Route path='/static_11' element={<BlogStaticPage_11 />} />
        <Route path='/node_11' element={<BlogNodeServer_11 />} />
        <Route path='/supa_11' element={<BlogSupabase_11 />} />
        <Route path='/local_11' element={<BlogLocalJson_11 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App_11;
