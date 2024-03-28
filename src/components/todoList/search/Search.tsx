"use client";

// Icons
import { Search as SearchIcon } from "react-bootstrap-icons";

export default function Search({ searchValue, setSearchValue }) {
  function handleChange(e) {
    setSearchValue(e.target.value);
  }

  return (
    <div className="input-group mb-3">
      <span className="input-group-text" id="basic-addon1">
        <SearchIcon />
      </span>

      <input
        type="text"
        className="form-control"
        placeholder="Todo Ara"
        aria-label="Search"
        aria-describedby="basic-addon1"
        value={searchValue}
        onChange={handleChange}
      />
    </div>
  );
}
