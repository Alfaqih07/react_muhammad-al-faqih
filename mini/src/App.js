import logo from './logo.svg';
import './App.css';
import Index from './pages/index'
import BBlebih from './pages/BBlebih' 
import BBkurang from './pages/BBkurang'
import Artikel from './pages/Berita'
import { BrowserRouter as Deklarasi, Routes, Route } from 'react-router-dom'; 
import Test from './pages/assets/Detailartikel'

function App() {
  return ( 
    <div className='App'>
    <Deklarasi>
      <Routes>
          <Route path="/" element={<Index/>}/>
          <Route index element={<Index />} />
          <Route path="BBlebih" element={<BBlebih />} />
          <Route path="Berita" element={<Artikel/>} />
          <Route path="BBkurang" element={<BBkurang />} />  
          <Route path="About" element={<BBkurang />} />
          <Route path="Contact" element={<BBkurang />} />
          <Route path="Detailberita" element={<BBkurang />} />
          <Route path="detail/:id" element={Test} />
      </Routes>
    </Deklarasi> 
    </div>
  )
}

export default App;