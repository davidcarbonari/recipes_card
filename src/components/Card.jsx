import { List } from "./List";

export const Card = ({ title, instructions, ingredients, image }) => {
  return (
    <div className="flex flex-col m-3 p-5 text-center rounded-lg bg-slate-700 max-w-md">
      <div>
        <h2 className="text-red-500 font-thin text-3xl m-3">{title}</h2>
        <p className="mb-2">Ingredients: </p>
        <ul className="flex flex-wrap list-disc m-3">
          {ingredients.map((ingredient, index) => (
            <List key={index}>{ingredient}</List>
          ))}
        </ul>
      </div>

      <div>
        <img src={image} alt={title} className="block w-full" />
      </div>
      <div>
        <h3 className="text-xl text-zinc-300 m-3">Instruction</h3>
        <ul className="text-zinc-400 m-3 list-disc text-left">
          {instructions.map((instruction, index) => (
            <List key={index}>{instruction}</List>
          ))}
        </ul>
      </div>
    </div>
  );
};
