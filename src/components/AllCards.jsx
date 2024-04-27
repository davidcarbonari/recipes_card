import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import { Navbar } from "./Navbar";
import { Card } from "./Card";

export const AllCards = () => {
  const [data, setData] = useState([]);
  const [url, setUrl] = useState(["https://dummyjson.com/recipes?limit=50"]);
  const updateUrl = (srcUrl) => {
    setUrl(`https://dummyjson.com/recipes${srcUrl}`);
  };
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data.recipes));
  }, [url]);

  return (
    <Link to={"/recipes"}>
      <div className="bg-zinc-50">
        <Navbar></Navbar>
        <div className="text-center m-auto ">
          <h1 className="text-red-800 font-medium p-6">
            All DummyJSON`s recipes
          </h1>
        </div>
      </div>
      <div className="grid grid-col lg:grid-cols-2  xl:grid-cols-3 2xl:grid-cols-4 justify-center">
        {data.map((recipe) => (
          <Card
            key={recipe.id}
            title={recipe.name}
            ingredients={recipe.ingredients}
            image={recipe.image}
            instructions={recipe.instructions}
          />
        ))}
      </div>{" "}
    </Link>
  );
};
