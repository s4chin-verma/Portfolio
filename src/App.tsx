import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Page from '@/app/Page';
import NotFound from '@/app/NotFound';
import { Cursor } from './components';
import '@/App.scss';

const App = () => {
   return (
      <Router>
         <Cursor className="hidden dark:lg:block" />
         <Routes>
            <Route path="/" element={<Page />} />
            <Route path="*" element={<NotFound />} />
         </Routes>
      </Router>
   );
};

export default App;
