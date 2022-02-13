import React, { useState } from "react";

function List({ contacts }) {

  const [filterText, setFilterText] = useState("");

  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) => 
      item[key]
        .toString()
        .toLowerCase()
        .includes(filterText.toLocaleLowerCase())
    );
  });

  return (
    <div>
      <label htmlFor="filter">Filter</label>
      <input 
        name="filter"
        placeholder="Filter contact"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />

      <ul>
        {filtered.map((contact, i) => (
          <li key={i}>{contact.fullName}</li>
        ))}
      </ul>
    </div>
  );
}

export default List;
