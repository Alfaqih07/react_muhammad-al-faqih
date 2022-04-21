import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'; 
import { store, persistor} from './kantor/kantor' 
import './App.css'; 


// import logo from './logo.svg';

// import Classcomponent from './Classcomponent'; 
// import FunctionComponent from './FunctionComponent';


import Home from './Pages/Home'; 
import UIUX from './Pages/UIUX'
import Figma from './Pages/Figma'
import Routess from './Pages/Routes' 
import CC from './Pages/cleanCode'
import Handling from './Pages/eventHandling' 
import Introduction from './Pages/introductinReact'
import JsRefreshment from './Pages/JsRefreshment'
import Form from './Pages/reactForm'
import Fundamental from './Pages/reactFundamental'
import Redux from './Pages/reactRedux'
import Testing from './Pages/reactTesting';  
import CSS from './Pages/CSS'
import HTML from './Pages/HTML'
import { BrowserRouter as Deklarasi, Routes, Route } from 'react-router-dom';
import Bootstrap from './Pages/Bootstrap'; 
import Hooks from './Pages/reactHooks'


// import Home from './EventHandling/Home'  
// -----eventHandling------


// import Home from './Redux/Home' 
// -----react redux-----

// import Form from './form/Form'

function App() {
  return (
    <Deklarasi>
      <Routes>
        <Route path="/" element={<Home/>}/>
          <Route index element={<Home />} />
          <Route path="/UIUX" element={<UIUX/>} />
          <Route path="/Figma" element={<Figma/>} />
          <Route path="/Routes" element={<Routess />} />
          <Route path="/HTML" element={<HTML />} />
          <Route path="/CSS" element={<CSS />} />
          <Route path="/Bootstrap" element={<Bootstrap />} />
          <Route path="/cleanCode" element={<CC/>} /> 
          <Route path="/eventHandling" element={<Handling/>} /> 
          <Route path="/introductionReact" element={<Introduction/>} /> 
          <Route path="/JsRefreshment" element={<JsRefreshment />} />
          <Route path="/reactForm" element={<Form/>} /> 
          <Route path="/reactFundamental" element={<Fundamental/>} />
          <Route path="/reactRedux" element={<Redux/>} /> 
          <Route path="/reactTesting" element={<Testing/>} /> 
          <Route path="/reactHooks" element={<Hooks/>} /> 
           
            
           
      </Routes>
    </Deklarasi>   


        // < div className='.App'>
        // <Form/>
        // </div>

    
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
