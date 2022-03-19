import logo from './logo.svg';
import './App.css';  
import Todosapp from './Pages/Todosapp';
import { BrowserRouter as Deklarasi, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Deklarasi>
      <Routes>
        {/* <Route path="/" element={<Layout />}/> */}
          <Route index element={<Todosapp />} />
          {/* <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </Deklarasi>
  );
}

export default App;
