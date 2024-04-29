import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { putData } from "../redux/dataSlice";
import { useEffect, useState } from "react";
import { Navbar } from "./Navbar";
import { Card } from "./Card";

export const AllCards = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const srcData = useSelector((state) => `${state.srcDataImput.value}`);
  const url = "https://dummyjson.com/recipes?limit=50";
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setData(data.recipes));
  }, []);
  dispatch(putData(data));
  console.log(data[0]);
  // const [url, setUrl] = useState(["https://dummyjson.com/recipes?limit=50"]);
  // const updateUrl = (srcUrl) => {
  //   setUrl(`https://dummyjson.com/recipes${srcUrl}`);
  // };
  // const url = "https://dummyjson.com/recipes?limit=50";
  // useEffect(() => {
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((data) => setData(data.recipes));
  //   dispatch(loadData(data));
  // }, []);

  return (
    <Link to={`/recipes`}>
      <div className="bg-zinc-50">
        <Navbar></Navbar>
        <div className="text-center m-auto ">
          <h1 className="text-red-800 font-medium p-6">
            All DummyJSON`s recipes
          </h1>
        </div>
      </div>
      <div className="grid grid-col lg:grid-cols-2  xl:grid-cols-3 2xl:grid-cols-4 justify-center">
        {srcData == ""
          ? data.map((recipe) => (
              <Card
                key={recipe.id}
                title={recipe.name}
                ingredients={recipe.ingredients}
                image={recipe.image}
                instructions={recipe.instructions}
              />
            ))
          : data
              .filter(
                (recipe) =>
                  recipe.name.toLowerCase().includes(srcData.toLowerCase()) ||
                  recipe.tags.some((tag) =>
                    tag.toLowerCase().includes(srcData.toLowerCase())
                  )
              )
              .map((recipe) => (
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
