import { useState } from "react";
import { useDispatch } from "react-redux";
import { srcDataImput } from "../redux/srcDataSlice";
import { Link } from "react-router-dom";
export const SearchBar = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(srcDataImput(value));
    setValue("");
    console.log(value);
  };
  const handleInput = (e) => {
    setValue(`${e.target.value}`);
  };
  return (
    <form>
      <input
        type="text"
        placeholder="search recipes"
        className=" bg-slate-700 text-white rounded-lg p-3 text-center lg:min-w-40 mr-3 shadow-black shadow-md transition-transform duration-300 transform hover:scale-105"
        onChange={handleInput}
        value={value}
        required
      />
      <button
        type="submit"
        className="bg-zinc-300 text-black hover:cursor-pointer  shadow-black shadow-md transition-transform duration-300 transform hover:scale-105"
        onClick={handleSubmit}
        disabled={value == null ? true : false}
      >
        <Link to={"/recipes"}>Search</Link>
      </button>
    </form>
  );
};
