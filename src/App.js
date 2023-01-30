import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const data = await axios.get(
          "https://jsonplaceholder.typicode.com/posts/1/comments"
        );
        let apiData = data.data;
        console.log("Print Data:", apiData);

        const myData = await Promise.all(
          apiData.map((item) => {
            const k = item;
            console.log("Value K:", k);

            const itemData = {
              name: item.name,
            };
            return itemData;
          })
        );

        setData(myData);
      } catch (error) {
        console.log(error.message);
      }
    }
    getData();
  }, []);

  console.log("Print Data items:", data);

  return (
    <>
      <div className="App">
        <h3>Results</h3>
        <div className="items_data">
          {data.map((item, index) => (
            <div>{item.name}</div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
