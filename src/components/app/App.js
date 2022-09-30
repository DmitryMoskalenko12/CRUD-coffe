import './app.scss';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const OurCoffe = lazy(() => import('../../page/OurCoffe'));
const FirstPage = lazy(() => import('../../page/FirstPage'));
const CardPage = lazy(() => import('../../page/CardPage'));
const PleasurePage = lazy(() => import('../../page/PleasurePage'));

 const App = () => {
  
    return(
      <Suspense fallback={ <div style={{textAlign: 'center', margin: '300px 100px 100px 100px'}}>Loading...</div> }>
      <Router>
        <Routes>
        <>
        <Route path ="/" element = {<FirstPage/>}/>
        <Route path="/ourCoffe" element = {<OurCoffe/>}/>
        <Route path='/ourCoffe/:id' element = {<CardPage/>}/>
        <Route path='/pleasure' element = {<PleasurePage/>}/>
       
        </>
        </Routes>
      
      </Router>
      </Suspense>
      
    )
  } 



export default App;