import "./Authors.css";
import { authors } from "../../data/authors";
import { useState } from "react";

function Authors() {

  

    const [ search , setSearch] = useState("")
  return (
    <div className="Authors">
      <div className="authors-search-box">
        <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
          type="text"
          className="authors-search-input"
          placeholder="Search in Authors "
        />
      </div>

      <div className="authors-content-images">
        <div className="images-wrapp">
          {authors
          .filter(a => a.name.toLowerCase().includes(search))
          .map((item) => (
            <div className="image">
              <div className="img">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="title">
                <h2>{item.name}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Authors;
