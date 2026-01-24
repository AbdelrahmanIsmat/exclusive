<<<<<<< HEAD
import { useEffect, useState } from "react";
import { productsData } from "../../productsData";
import { Link } from "react-router-dom";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (search.trim() === "") {
        setResults([]);
        return;
      }

      const filtered = productsData.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      );

      setResults(filtered);
    }, 500); // debounce

    return () => clearTimeout(timer);
  }, [search]);

  return (
    <div className="relative w-60">
      {/* Input */}
      <div className="relative h-9.5">
        <div className="absolute inset-0 bg-[#F5F5F5] rounded-md" />

        <input
          type="text"
          placeholder="What are you looking for?"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="
            relative z-10
            w-full h-full
            pl-4 pr-10
            bg-transparent
            text-sm
            outline-none
            placeholder-black/50
          "
        />

        <button
          aria-label="Search"
          className="absolute right-3 top-1/2 -translate-y-1/2 z-10"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path
              d="M21 21L16.65 16.65M18 11A7 7 0 1 1 4 11a7 7 0 0 1 14 0Z"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      {/* Results Dropdown */}
      {results.length > 0 && (
        <div className="absolute top-11 left-0 w-full bg-white shadow-md rounded-md z-50">
          {results.map((item) => (
            <Link
              to={`/ProductDetails/${item.id}`}
              key={item.id}
              className="block px-4 py-2 text-sm cursor-pointer hover:bg-gray-100"
            >
              {item.title}
            </Link>
          ))}
        </div>
      )}
=======
const SearchBar = ({ value, onChange }) => {
  return (
    <div className="relative w-60 h-9.5">
      <div className="absolute inset-0 bg-[#F5F5F5] rounded-md" />
      <input
        type="text"
        placeholder="What are you looking for?"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="
          relative z-10
          w-full h-full
          pl-4 pr-10
          bg-transparent
          text-sm
          outline-none
          placeholder-black/50
        "
      />

      <button
        aria-label="Search"
        className="absolute right-3 top-1/2 -translate-y-1/2 z-10"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path
            d="M21 21L16.65 16.65M18 11A7 7 0 1 1 4 11a7 7 0 0 1 14 0Z"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </button>
>>>>>>> f9d48f2a3213b1a0d332ed53559d7da121579cd4
    </div>
  );
};

export default SearchBar;
