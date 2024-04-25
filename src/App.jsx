import "./App.css";
import { Card } from "./components/Card";
import { Navbar } from "./components/Navbar";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  const urlData = "https://dummyjson.com/recipes";
  useEffect(() => {
    fetch(urlData)
      .then((response) => response.json())
      .then((data) => setData(data.recipes));
  });
  return (
    <>
      <Navbar />
      <div className="flex flex-wrap gap-4 justify-center">
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
