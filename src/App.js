import "./App.css";
const axios = require("axios");

function App() {
  const options = {
    method: "GET",
    url: "https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/v1/prices/direct/",
    params: { destination: "LED", origin: "MOW" },
    headers: {
      "X-Access-Token": "undefined",
      "X-RapidAPI-Key": "4c31cf640cmshdfbdc0851576d6bp16ec33jsn6339f47a9bff",
      "X-RapidAPI-Host":
        "travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });

  return (
    <div className="App">
      <button onClick={options}>Click Me</button>
    </div>
  );
}

export default App;
