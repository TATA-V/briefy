import { Routes, Route } from 'react-router-dom';
import DefaultLayout from 'src/components/Layout/DefaultLayout';
import 'src/style/global.css';

import Header from 'src/components/Header/Header';
import MainPage from 'src/pages/MainPage';
import InterestPage from 'src/pages/InterestPage';

function App() {
  return (
    <DefaultLayout>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/interest" element={<InterestPage />} />
      </Routes>
    </DefaultLayout>
  );
}

export default App;
