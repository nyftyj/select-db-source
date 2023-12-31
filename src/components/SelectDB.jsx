import { useState, useEffect, useMemo } from 'react';
import { MOCK_DBS, FILTER_BY_DEFAULT_TEXT } from '../constants';

import { Action, DBList, Loading } from '../components';

const SelectDB = () => {
  const [list, setList] = useState([]);
  const [query, setQuery] = useState('');
  const [filterBy, setFilterBy] = useState(FILTER_BY_DEFAULT_TEXT);
  const [isLoading, setIsLoading] = useState(true);

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  const handleFilter = (e) => {
    const dbType = e.target.value;
    setFilterBy(dbType);
  };

  // This page should fetch for available db types and display them on page load.
  // Since no API was provided, I created a mock response.
  useEffect(() => {
    setList(MOCK_DBS);

    // calling setTimeout here to mimic fetching data wait time
    setTimeout(() => {
      setIsLoading(false);
    }, 800);
  }, []);

  // caching queiedList to reduce re-rendering when filters are changed
  const queriedList = useMemo(() => {
    return list.filter((dbs) => dbs.name.toLowerCase().includes(query));
  }, [list, query]);

  const filteredList =
    filterBy === FILTER_BY_DEFAULT_TEXT
      ? queriedList
      : queriedList.filter((dbs) => dbs.type.has(filterBy));

  return (
    <>
      <Action
        handleSearch={handleSearch}
        handleFilter={handleFilter}
        filterBy={filterBy}
      />
      {isLoading ? <Loading /> : <DBList list={filteredList} />}
    </>
  );
}

export default SelectDB;