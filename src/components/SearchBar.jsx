import { useState } from "react";

export const SearchBar = ({ updateUrl }) => {
  const [value, setValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const srcUrl = `${value}`;
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
        className=" bg-slate-700 text-white rounded-lg h-11 text-center"
        onChange={handleInput}
      />
      <button
        type="submit"
        className="bg-zinc-300 text-black hover:cursor-pointer"
        onClick={handleSubmit}
      >
        Search
      </button>
    </form>
  );
};
