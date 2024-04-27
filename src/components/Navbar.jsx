import { Link } from "react-router-dom";
import { SearchBar } from "./SearchBar";
export const Navbar = () => {
  return (
    <div className="p-3">
      <ul className="flex flex-wrap text-black text-center justify-between">
        <li className="p-2.5 min-w-40">
          <Link to={"/"}>Home</Link>
        </li>
        <li className="p-2.5 min-w-40">
          <Link to={"/recipes"}>All Recipes</Link>
        </li>
        <li className="align-center px-3">
          <SearchBar />
        </li>
      </ul>
    </div>
  );
};
