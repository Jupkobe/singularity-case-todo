"usse ";

// Icons
import { Search as SearchIcon } from "react-bootstrap-icons";

export default function Search({ searchValue, setSearchValue }) {
  return (
    <div class="input-group mb-3">
      <span class="input-group-text" id="basic-addon1">
        <SearchIcon />
      </span>
      <input
        type="text"
        class="form-control"
        placeholder="Todo Ara"
        aria-label="Search"
        aria-describedby="basic-addon1"
      />
    </div>
  );
}
