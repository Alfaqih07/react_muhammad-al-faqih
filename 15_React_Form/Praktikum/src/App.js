import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'; 
import { store, persistor} from './kantor/kantor' 
import './App.css';  


// import logo from './logo.svg';

// import Classcomponent from './Classcomponent'; 
// import FunctionComponent from './FunctionComponent';


// import Home from './Pages/Home'; 
// import About_app from './Pages/About_app'
// import About_author from './Pages/About_author'
// import { BrowserRouter as Deklarasi, Routes, Route } from 'react-router-dom';


// import Home from './EventHandling/Home'  
// -----eventHandling------


// import Home from './Redux/Home' 
// -----react redux-----

import Form from './form/Form'

function App() {
  return (
    // <Deklarasi>
    //   <Routes>
    //     {/* <Route path="/" element={</>}/> */}
    //       <Route index element={<Home />} />
    //       <Route path="About_app" element={<About_app/>} />
    //       <Route path="About_author" element={<About_author/>} />
    //       {/* <Route path="*" element={<NoPage />} /> */} 
    //   </Routes>
    // </Deklarasi>   


        < div className='.App'>
        <Form/>
        </div>

    
    // <div className='App'> 
    // <Provider store = {store}> 
    //   <PersistGate loading={null} persistor ={persistor}>
    // {/* <FunctionComponent Users={Data}/> */} 
    //   <Home/>
    //   </PersistGate>
    // </Provider>
    // </div>

  );
}

export default App;
