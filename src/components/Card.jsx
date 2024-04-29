/* eslint-disable react/prop-types */
// import { List } from "./List";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faUtensils,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";

export const Card = ({
  title,
  // instructions,
  // ingredients,
  image,
  prepTimeMinutes,
  cookTimeMinutes,
  cuisine,
  servings,
  difficulty,
  rating,
}) => {
  return (
    <div className="flex flex-col m-6 p-5 text-center rounded-3xl bg-slate-700 max-w-md shadow-lg transition-transform duration-300 transform hover:scale-105 shadow-black">
      <div>
        <h2 className="text-red-500 font-thin text-3xl m-3">{title}</h2>
        <div>
          <p className="mb-2">
            <FontAwesomeIcon icon={faClock} className="mr-2" />
            Prep: {prepTimeMinutes} min, Cooking: {cookTimeMinutes} min
          </p>
        </div>
        <div
          className="grid grid-cols-2 justify-center
         text-center"
        >
          <p>
            <FontAwesomeIcon icon={faUtensils} className="mr-1" /> Cuisine:{" "}
            {cuisine}
          </p>
          <p>
            <FontAwesomeIcon icon={faPerson} className="mr-1" /> Servings:
            {servings} people
          </p>
          <p>Difficulty: {difficulty}</p>
          <p>Rating: {rating} </p>
        </div>

        {/* <FontAwesomeIcon icon={} /> */}
        <div className="my-6">
          <img src={image} alt={title} className="block w-full" />
        </div>
        {/* <ul className="flex flex-wrap list-disc m-3">
          {ingredients.map((ingredient, index) => (
            <List key={index}>{ingredient}</List>
          ))}
        </ul> */}
      </div>
      {/* 
      <div>
        <h3 className="text-xl text-zinc-300 m-3">Instruction</h3>
        <ul className="text-zinc-400 m-3 list-disc text-left">
          {instructions.map((instruction, index) => (
            <List key={index}>{instruction}</List>
          ))}
        </ul>
      </div> */}
    </div>
  );
};
