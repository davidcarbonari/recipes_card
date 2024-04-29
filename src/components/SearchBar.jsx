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
    // const srcUrl = `${value}`;
    // updateUrl(srcUrl);
  };
  // const handleReset = () => {
  //   dispatch(srcUrl());
  //   // updateUrl(srcUrl);
  // };
  const handleInput = (e) => {
    // setValue(`/search?q=${e.target.value}`);
    setValue(`${e.target.value}`);
    // console.log("handleInput " + value);
  };
  return (
    <form>
      <input
        type="text"
        placeholder="search recipes"
        className=" bg-slate-700 text-white rounded-lg p-3 text-center lg:min-w-40 mr-1"
        onChange={handleInput}
        value={value}
        required
      />
      <button
        type="submit"
        className="bg-zinc-300 text-black hover:cursor-pointer"
        onClick={handleSubmit}
        disabled={value == null ? true : false}
      >
        <Link to={"/recipes"}>Search</Link>
      </button>
      {/* <button
        type="reset"
        className="text-zinc-300 bg-black hover:cursor-pointer"
        onClick={handleReset}
      >
        <Link to={"/"}>Search</Link>
      </button> */}
    </form>
  );
};
