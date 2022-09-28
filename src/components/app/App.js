import './app.scss';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OurCoffe from '../../page/OurCoffe';
import FirstPage from '../../page/FirstPage';
 const App = () => {
  
    return(
      <Router>
        <Routes>
        <>
        <Route path ="/" element = {<FirstPage/>}/>
        <Route path="/ourCoffe" element = {<OurCoffe/>}/>
        </>
        </Routes>
      
      </Router>
    )
  } 



export default App;