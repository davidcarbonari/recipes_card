import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

import { Card } from "./Card";
import { Navbar } from "./Navbar";
export const SrcCard = () => {
  let url = useSelector((state) => state.srcUrl.value);
  console.log(url);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data.recipes));
  }, [url]);
  return (
    <Link to={`"./recipes/:url`}>
      <div className="bg-zinc-50">
        <Navbar></Navbar>
        <div className="text-center m-auto ">
          <h1 className="text-red-800 font-medium p-6">DummyJSON`s recipes</h1>
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
      </div>
    </Link>
  );
};
