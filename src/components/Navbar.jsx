import { Link } from "react-router-dom";
import { SearchBar } from "./SearchBar";

import { useDispatch, useSelector } from "react-redux";
import { srcDataImput } from "../redux/srcDataSlice";
export const Navbar = () => {
  const dispatch = useDispatch();
  const srcData = useSelector((state) => `${state.srcDataImput.value}`);
  return (
    <div className="p-3">
      <ul className="flex flex-wrap text-black text-center justify-between">
        <li className="p-2.5 min-w-40">
          <Link to={"/"}>Home</Link>
        </li>
        <li
          className="p-2.5 min-w-40"
          onClick={() => dispatch(srcDataImput(""))}
        >
          <Link to={`/recipes`} key={srcData}>
            All Recipes
          </Link>
        </li>
        <li className="align-center px-3">
          <SearchBar />
        </li>
      </ul>
    </div>
  );
};
