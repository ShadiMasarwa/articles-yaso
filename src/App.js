import { useState } from "react";
import Form from "../src/Components/Form";
import Articles from "./Components/Articles";
import GlobalContext from "./Hooks/GlobalContext";

function App() {
  const [articles, setArticles] = useState([]);
  const [index, setIndex] = useState(0);
  return (
    <div className="container">
      <GlobalContext.Provider
        value={{ articles, setArticles, index, setIndex }}
      >
        <Form />
        <Articles />
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
