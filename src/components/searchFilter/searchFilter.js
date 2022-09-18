import './searchFilter.scss';
import {Component} from 'react';
class SearchFilter extends Component {
constructor(props){
  super(props);
  this.state ={
    term:''
  }
}

onSetTerm = (e) =>{
let word = e.target.value;
this.setState({term: word })
this.props.findTerm(word)
}

render(){
  return(
    <section className="searchFilter">
      <div className="container">
      <div className="searchFilter__wrapper">
        <div className="searchFilter__search">
          <label className="searchFilter__label" htmlFor="search">Looking for</label>
          <input value={this.state.term} onChange={this.onSetTerm} id="search" className="searchFilter__input"
           name="searchname" 
           type="text" 
           required placeholder="start typing here..." />
        </div>

        <div className="searchFilter__filter">
          <div className="searchFilter__text">Or filter</div>
          <div className="searchFilter__buttons">
            <button className="searchFilter__Brazil">Brazil</button>
            <button className="searchFilter__Kenya">Kenya</button>
            <button className="searchFilter__Columbia">Columbia</button>
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}
  
}

export default SearchFilter;