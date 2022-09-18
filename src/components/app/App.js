import './app.scss';
import Header from '../Header/Header';
import About from '../About/About';
import SearchFilter from '../searchFilter/searchFilter';
function App() {
return(
  <div className="wrapper">
    <Header/>
    <About/>
    <SearchFilter/>
  </div>
)
}

export default App;