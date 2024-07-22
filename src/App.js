import React from 'react'
import { BrowserRouter , Routes , Route,} from "react-router-dom";
import LoginPage from './pages/LoginPage/login' 
import HeaderSection from './pages/MainPage/mainPage';
import NotFound from './pages/Nopage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route index element={<LoginPage />}/>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/mainPage" element={<HeaderSection />} />
        <Route path="*" element={<NotFound />} />
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
