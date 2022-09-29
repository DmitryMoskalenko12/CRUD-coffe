import './searchFilter.scss';
import { useState } from 'react';

const SearchFilter = (props) => {
const [term, setTerm] = useState('');

const onSetTerm = (e) =>{
let word = e.target.value;
setTerm(word)
props.findTerm(word)
}

  const buttons = [
    {clazz:'searchfilter__Brazil', name: 'Brazil'},
    {clazz:'searchfilter__Kenya', name: 'Kenya'},
    {clazz:'searchfilter__Columbia', name: 'Columbia'},
    {clazz:'searchfilter__All', name: 'All'}
  ]

  const res = buttons.map(elem =>{
    return (
    <button onClick={()=> props.findFilter(elem.name) } key={elem.name} className={elem.clazz}>{elem.name}</button>
    )
  })
  return(
    <section className="searchfilter">
      <div className="container">
      <div className="searchfilter__wrapper">
        <div className="searchfilter__search">
          <label className="searchfilter__label" htmlFor="search">Looking for</label>
          <input value={term} onChange={onSetTerm} id="search" className="searchfilter__input"
           name="searchname" 
           type="text" 
           required placeholder="start typing here..." />
        </div>

        <div className="searchfilter__filter">
          <div className="searchfilter__text">Or filter</div>
          <div className="searchfilter__buttons">
        {res}
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}
  


export default SearchFilter;