import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState();

  async function getData() {
    await axios
      .get("https://jsonplaceholder.typicode.com/posts/1/comments")
      .then((response) => {
        let res = response.data;
        setData(res);
        console.log("Results:", res);
      });
  }

  return (
    <div className="App">
      <h3>Results</h3>
      <div>
        {data.map((item, i) => (
          <div key={i}>
            <p>{item}</p>
          </div>
        ))}
        <button onClick={getData}>Click Me</button>
      </div>
    </div>
  );
}

export default App;
