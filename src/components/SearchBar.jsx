import { useState } from "react";

// eslint-disable-next-line react/prop-types
export const SearchBar = ({ updateUrl }) => {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const srcUrl = `${value}`;
    updateUrl(srcUrl);
  };
  const handleReset = () => {
    const srcUrl = ``;
    updateUrl(srcUrl);
  };
  const handleInput = (e) => {
    setValue(`/search?q=${e.target.value}`);
  };
  return (
    <form>
      <input
        type="text"
        placeholder="search recipes"
        className=" bg-slate-700 text-white rounded-lg p-3 text-center lg:min-w-40 mr-1"
        onChange={handleInput}
      />
      <button
        type="submit"
        className="bg-zinc-300 text-black hover:cursor-pointer"
        onClick={handleSubmit}
      >
        Search
      </button>
      <button
        type="reset"
        className="text-zinc-300 bg-black hover:cursor-pointer"
        onClick={handleReset}
      >
        Reset
      </button>
    </form>
  );
};
