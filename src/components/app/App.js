import './app.scss';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OurCoffe from '../../page/OurCoffe';
import FirstPage from '../../page/FirstPage';
import CardPage from '../../page/CardPage';
import PleasurePage from '../../page/PleasurePage';
 const App = () => {
  
    return(
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
    )
  } 



export default App;