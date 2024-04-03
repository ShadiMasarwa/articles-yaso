import React, { useContext, useState } from "react";
import GlobalContext from "../Hooks/GlobalContext";

const Form = () => {
  const { articles, setArticles, index, setIndex } = useContext(GlobalContext);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const handleAdd = () => {
    const tempArticle = { index, title, text };
    setArticles([...articles, tempArticle]);
    setIndex(index + 1);
  };
  return (
    <div>
      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label for="exampleInputPassword1" className="form-label">
          Text
        </label>
        <textarea
          type="text"
          className="form-control"
          id="exampleInputPassword1"
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      <button className="btn btn-primary" onClick={handleAdd}>
        Add Article
      </button>
    </div>
  );
};

export default Form;
