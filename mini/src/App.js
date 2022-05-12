import logo from './logo.svg';
import './App.css';
import Index from './pages/index'
import { BrowserRouter as Deklarasi, Routes, Route } from 'react-router-dom';

function App() {
  return ( 
    <div className='App'>
    <Deklarasi>
      <Routes>
        {/* <Route path="/" element={</>}/> */}
          <Route index element={<Index />} />
          {/* <Route path="About_app" element={<About_app/>} /> */}
          {/* <Route path="About_author" element={<About_author/>} /> */}
          {/* <Route path="*" element={<NoPage />} /> */} 
      </Routes>
    </Deklarasi> 
    </div>
  )
}

export default App;