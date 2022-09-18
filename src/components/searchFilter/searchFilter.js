import './searchFilter.scss';

function SearchFilter() {
  return(
    <section className="searchFilter">
      <div className="container">
      <div className="searchFilter__wrapper">
        <div className="searchFilter__search">
          <label htmlFor="search">Looking for</label>
          <input id="search" className="searchFilter__input"
           name="searchname" 
           type="text" 
           required placeholder="start typing here..." />
        </div>

        <div className="searchFilter__filter">
          <div className="searchFilter__text">Or filter</div>
          <button className="searchFilter__button">Brazil</button>
          <button className="searchFilter__button">Kenya</button>
          <button className="searchFilter__button">Columbia</button>
        </div>
      </div>
      </div>
    </section>
  )
}

export default SearchFilter;