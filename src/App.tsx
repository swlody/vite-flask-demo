import "./App.css";
// @deno-types="@types/react"
import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import { API_URL } from "./index.tsx";

function App() {
  const [data, setData] = useState(0);

  useEffect(() => {
    fetch(`${API_URL}/v1/hello`)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div>{JSON.stringify(data)}</div>
    </div>
  );
}

export default App;
