import SearchIcon from '../assets/icons/search.svg';
import DownCarotIcon from '../assets/icons/nav-arrow-down.svg';
import { DB_FILTER_OPTIONS } from '../constants';

const Action = ({ handleSearch, handleFilter, filterBy }) => {
    return (
      <section>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "16px 0",
          }}
        >
          <div className="search-container">
            <img
              className="search-icon"
              src={SearchIcon}
              role="img"
            />
            <input
              className="search-input"
              type="text"
              placeholder="Search"
              aria-label='Search database name'
              onChange={(e) => handleSearch(e)}
            />
          </div>
          <div className="select-filter-container">
            <select
              className="select-filter"
              onChange={(e) => handleFilter(e)}
            >
              {DB_FILTER_OPTIONS.map((opt) => (
                <option key={opt} value={opt} aria-selected={filterBy === opt}>
                  {opt}
                </option>
              ))}
            </select>
            <img
              className="down-carot"
              src={DownCarotIcon}
              role="img"
            />
          </div>
        </div>
      </section>
    );
}

export default Action;