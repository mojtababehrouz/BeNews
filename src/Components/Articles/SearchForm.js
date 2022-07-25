import React, { useState } from "react";

function SearchForm({ searchText }) {
  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setText(" ");
    searchText(text);
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="mt-24">
        <input
          type="text"
          placeholder="e.g politics"
          className="py-3 px-6 rounded-l-lg"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button
          type="submit"
          className="bg-green-400 py-3 px-6 rounded-r-lg text-white"
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchForm;
