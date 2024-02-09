import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '@/app/Layout';
import NotFound from '@/app/NotFound';
import { Cursor } from '@/components';
import '@/App.css';

const App = () => {
   return (
      <Router>
         <Cursor className="hidden dark:lg:block" />
         <Routes>
            <Route path="/" element={<Layout />} />
            <Route path="*" element={<NotFound />} />
         </Routes>
      </Router>
   );
};

export default App;
