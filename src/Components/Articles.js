import React, { useContext, useState } from "react";
import GlobalContext from "../Hooks/GlobalContext";

const Articles = () => {
  const { articles, setArticles } = useContext(GlobalContext);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [updateIndex, setUpdateIndex] = useState();

  const handleDelete = (index) => {
    const tempArticles = articles.filter((el) => el.index !== index);
    setArticles(tempArticles);
  };
  const handleEdit = (index) => {
    const currArticle = articles.filter(
      (article) => article.index === index
    )[0];
    setTitle(currArticle.title);
    setText(currArticle.text);
    setUpdateIndex(index);
  };

  const handleUpdate = () => {
    const newArt = { index: updateIndex, title: title, text: text };
    const newArry = articles.map((article) =>
      article.index === updateIndex ? newArt : article
    );
    setArticles([...newArry]);
  };

  return (
    <div>
      {articles.map((article) => {
        return (
          <div className="card mt-3" style={{ width: "100%" }}>
            <div className="card-body">
              <h5 className="card-title">{article.title}</h5>
              <p className="card-text">{article.text}</p>
              <button
                className="btn btn-danger"
                onClick={() => handleDelete(article.index)}
              >
                Delete
              </button>
              <button
                type="button"
                className="btn btn-success"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
                onClick={() => handleEdit(article.index)}
              >
                Edit
              </button>
            </div>
            <div
              className="modal fade"
              id="staticBackdrop"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              tabindex="-1"
              aria-labelledby="staticBackdropLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="staticBackdropLabel">
                      Edit Article
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <div className="mb-3">
                      <label for="exampleInputEmail1" className="form-label">
                        Title
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        value={title}
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
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-danger"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button
                      type="button"
                      className="btn btn-success"
                      onClick={handleUpdate}
                      data-bs-dismiss="modal"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Articles;
