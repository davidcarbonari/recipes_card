import "./App.css";
import { Card } from "./components/Card";
import { Navbar } from "./components/Navbar";
import { SearchBar } from "./components/SearchBar";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  const [url, setUrl] = useState(["https://dummyjson.com/recipes"]);
  const updateUrl = (srcUrl) => {
    setUrl(`https://dummyjson.com/recipes${srcUrl}`);
  };
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data.recipes));
  }, [url]);
  return (
    <>
      <Navbar />
      <div className=" bg-zinc-50 flex justify-center pb-3">
        <SearchBar updateUrl={updateUrl} />
      </div>
      <div className="flex flex-wrap justify-center">
        {data.map((recipe) => (
          <Card
            key={recipe.id}
            title={recipe.name}
            ingredients={recipe.ingredients}
            image={recipe.image}
            instructions={recipe.instructions}
          />
        ))}
      </div>
    </>
  );
}
export default App;
