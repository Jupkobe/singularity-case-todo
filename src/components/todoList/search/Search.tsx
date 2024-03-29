"use client";

// Types
import { ChangeEvent } from "react";

// Icons
import { Search as SearchIcon } from "react-bootstrap-icons";

export default function Search({
  searchValue,
  setSearchValue,
}: {
  searchValue: string;
  setSearchValue: Function;
}) {
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setSearchValue(e?.target.value);
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
